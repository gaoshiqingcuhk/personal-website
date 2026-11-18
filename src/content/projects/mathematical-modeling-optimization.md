---
title: "Mathematical Modeling and Optimization"
date: 2026-04-15
status: "Completed computational modeling workflow"
category: "Academic / Technical"
tags: ["Mathematical Modeling", "Optimization", "Surrogate Modeling"]
summary: "A chip thermal management modeling project using surrogate models, multi-objective optimization, weight sensitivity analysis, and Monte Carlo robustness checks."
role: "Modeling direction, result checks, and interpretation"
tools: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib", "LaTeX"]
featured: true
---

## Cooling Performance Is Not a Single Objective

This project examines a high-performance chip thermal management problem involving
manifold microchannels and pin-fin designs. Lower thermal resistance, lower
pressure drop, and more uniform temperature are all desirable, but they need
not favor the same geometry. The question is how to compare candidate designs
without hiding those competing objectives behind one unexplained score.

The supplied performance workbook contains 84 samples. The common normalization
reference uses the 80 enhanced pin-fin designs. The workflow begins with data
cleaning, normalization, main-effect plots, and correlations, then uses surrogate
models to explore the supplied design space.

## From Surrogate Models to Candidate Designs

Candidate models include polynomial response surfaces, Gaussian process
regression, random forests, and gradient boosting. Cross-validation compares
prediction errors for each of the three responses. The selected combination
uses GPR for thermal resistance and temperature nonuniformity, and a cubic
ridge response surface for pressure drop. Keeping these choices explicit avoids
treating a single model family as uniformly best.

Pareto filtering identifies designs for which no other candidate improves all
three objectives simultaneously. Weighted sums and TOPSIS then express particular
preferences among the trade-offs. Both observed samples and surrogate-search
candidates are examined; predicted improvements are not treated as new physical
measurements.

## When a Recommendation Changes

The saved analysis recommends sample #64 for nominal performance, while #48
remains an alternative under weight-robustness criteria emphasizing variability
or tail risk. These conclusions depend on how the objectives are weighted,
rather than identifying one universally optimal geometry.

Random weight sampling tests sensitivity to decision preferences. Separately,
manufacturing Monte Carlo experiments perturb designs and evaluate the saved
surrogates. The common-normalization analysis scores each perturbed prediction
against the same reference, making comparisons across candidates meaningful.
Discrete pin-row changes and an approximate flow-rate analysis provide additional
checks.

<figure>
  <a href="/images/projects/modeling/manufacturing-robustness.png"><img src="/images/projects/modeling/manufacturing-robustness.png" width="1500" height="900" loading="lazy" alt="Boxplots of surrogate-predicted composite scores under manufacturing perturbations for designs 64, 48, 14, and 80. Design 64 has lower scores, while design 14 has a narrow spread but substantially worse scores." /></a>
  <figcaption>Existing manufacturing-perturbation output, using common normalization; lower composite scores are preferred. The horizontal axis lists candidate designs and the vertical axis is the composite score. Original Chinese labels are retained. Source: fig_27_common_norm_composite_boxplot.png and the saved common-normalization tables.</figcaption>
</figure>

In those manufacturing runs, #64 has a lower mean composite score and lower
upper-tail risk than #48. Sample #14 has a smaller score standard deviation
but worse nominal performance. Its narrower spread is therefore not a reason
by itself to recommend it. Weight uncertainty and manufacturing uncertainty
are distinct experiments and should not be combined into one claim of
"robustness."

## Interpretation and Limits

My work focused on directing the modeling workflow, checking the numerical
outputs, and interpreting why rankings changed. An important lesson was that
normalization and the definition of risk can affect a recommendation as much
as the choice of optimizer.

All conclusions are conditional on the supplied data, surrogate fit, search
domain, weights, and perturbation assumptions. The flow-rate calculation uses
engineering approximations. The project does not include new CFD simulations,
fabricated hardware, or experimental validation of the recommended design.

The source material is the local modeling README, model-comparison tables,
common-normalization manufacturing tables, and written analysis. No public
repository or original competition-input download is linked here.
