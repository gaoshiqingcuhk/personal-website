---
title: "Machine Learning Uncertainty Quantification"
date: 2026-05-05
status: "Completed small computational project"
category: "Academic / Technical"
tags: ["Uncertainty Quantification", "Machine Learning", "Statistical Modeling"]
summary: "A reproducible regression uncertainty project using the UCI Energy Efficiency dataset to compare point prediction, interval coverage, interval width, and robustness diagnostics."
role: "Experiment direction, calibration checks, and interpretation"
tools: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib"]
repoUrl: "https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification"
featured: true
---

## Accurate Predictions, Unreliable Intervals?

A model can predict well on average while understating uncertainty around each
prediction. This project separates those questions using the UCI Energy
Efficiency dataset: 768 samples, eight input features, and Heating Load as the
target. Ridge regression, random forests, and Gaussian process regression (GPR)
provide point-prediction baselines.

On the initial fixed test split, GPR achieved an RMSE of 0.4786, but intervals
formed from its mean plus or minus 1.64 predictive standard deviations covered
only 84.42% of targets, below the nominal 90%. Checking those outputs motivated
the calibration experiments rather than a search for a more accurate predictor.

## Calibration and the Cost of Coverage

Split conformal prediction reserves separate data for calibration. An
absolute-residual quantile sets a symmetric interval around each prediction.
The conformal runs use 460 training, 154 calibration, and 154 test samples.
Scaling is fitted using training data only.

<div class="project-table-wrap" tabindex="0" role="region" aria-label="Prediction interval results">
  <table>
    <caption>Nominal 90% intervals on the original 154 held-out targets.</caption>
    <thead><tr><th scope="col">Method</th><th scope="col">Coverage</th><th scope="col">Mean width</th></tr></thead>
    <tbody>
      <tr><th scope="row">Approximate GPR</th><td>84.42%</td><td>1.5274</td></tr>
      <tr><th scope="row">GPR conformal</th><td>91.56%</td><td>1.9096</td></tr>
      <tr><th scope="row">Random forest conformal</th><td>92.86%</td><td>2.0503</td></tr>
    </tbody>
  </table>
</div>

The initial GPR uses 614 training samples; the conformal models reserve 154
of those for calibration. Thus the table compares recorded workflows, not
identically trained predictors. Widths use the dataset's Heating Load scale.
Across ten split seeds, mean conformal coverage was 90.32% for GPR and 90.84%
for random forests, with variation between individual splits.

Bootstrap prediction percentiles gave much narrower bands, but often missed
the targets. In the matched-split random forest comparison, residual correction
raised coverage from 55.19% to 100%, widening the mean band from 0.7803 to 2.6627.
This made the distinction between variability of a fitted predictor and
uncertainty about a future observation concrete.

## A Distribution-Shift Stress Test

The robustness experiment adds Gaussian noise to every standardized test feature
while retaining the clean-data conformal quantile. At noise standard deviation
0.01, empirical coverage fell from 91.56% to 35.06%; at 0.10 it was 3.25%.
Interval width remained 1.9096 because calibration was not updated.

<figure>
  <a href="/images/projects/uncertainty-quantification/input-perturbation.png"><img src="/images/projects/uncertainty-quantification/input-perturbation.png" width="1477" height="1038" loading="lazy" alt="GPR conformal coverage drops from about 91.6 percent without input noise to 35.1, 16.2, 8.4, and 3.2 percent as standardized input noise increases; the nominal coverage line stays at 90 percent." /></a>
  <figcaption>Gaussian-noise stress test with unchanged calibration, not a realistic sensor-error model. The original figure rounds percentages to one decimal place. Source: <a href="https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification/blob/4333dac6d25ec1670c7f34cf2e68044f2b47a8fb/results/input_perturbation_robustness.csv">input_perturbation_robustness.csv</a>.</figcaption>
</figure>

Perturbing discrete or structured features this way can produce off-manifold
inputs. The experiment diagnoses sensitivity to a particular shift; it does not
measure reliability under a specified physical measurement process. A separate
reduced-training-size experiment maintained approximately nominal coverage
through recalibration, but with wider intervals.

## What I Took from the Study

My focus was directing the comparisons, checking coverage and width together,
and interpreting failure cases. These results concern one dataset and the tested
splits. They are not universal method rankings or guarantees under distribution
shift. External validation and perturbations that preserve valid feature
structure would be needed before drawing broader conclusions.

Sources: [results digest](https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification/blob/4333dac6d25ec1670c7f34cf2e68044f2b47a8fb/report/results_digest.md),
[initial interval summary](https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification/blob/4333dac6d25ec1670c7f34cf2e68044f2b47a8fb/results/mvp_interval_summary.csv),
[conformal summary](https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification/blob/4333dac6d25ec1670c7f34cf2e68044f2b47a8fb/results/conformal_summary.csv),
[matched bootstrap comparison](https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification/blob/4333dac6d25ec1670c7f34cf2e68044f2b47a8fb/results/bootstrap_residual_corrected_summary.csv).
