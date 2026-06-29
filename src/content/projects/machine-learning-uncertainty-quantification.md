---
title: "Machine Learning Uncertainty Quantification"
date: 2026-05-05
status: "Completed small computational project"
category: "Academic / Technical"
tags: ["Uncertainty Quantification", "Machine Learning", "Statistical Modeling"]
summary: "A reproducible regression uncertainty project using the UCI Energy Efficiency dataset to compare point prediction, interval coverage, interval width, and robustness diagnostics."
role: "Independent numerical experiment"
tools: ["Python", "NumPy", "pandas", "scikit-learn", "matplotlib"]
repoUrl: "https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification"
featured: true
---

## Overview

This project studies predictive uncertainty for regression on the UCI Energy Efficiency dataset, using Heating Load as the target. Instead of only evaluating point predictions, it compares interval reliability through empirical coverage, interval width, repeated-split behavior, bootstrap variants, and robustness checks.

The scope is intentionally modest: the project focuses on diagnostics and interpretation rather than proposing a new uncertainty quantification method.

## What I Studied / Implemented

- UCI Energy Efficiency regression dataset with 768 samples and 8 input features
- Heating Load as the prediction target
- Regression baselines and approximate Gaussian process intervals
- Split conformal prediction and repeated-split calibration diagnostics
- Naive bootstrap and residual-corrected bootstrap intervals
- Reduced-training-size and perturbed-input robustness checks

## Methods or Workflow

The workflow downloads and validates the dataset, runs baseline regression experiments, then compares approximate GPR intervals, split conformal intervals, bootstrap intervals, and residual-corrected bootstrap intervals. Repeated splits are used to check whether empirical coverage and interval width are stable across calibration choices.

The project keeps saved CSV and PNG outputs under `results/` and `figures/`, with short reports under `report/`.

## Outputs

- CSV outputs including method comparisons, interval summaries, repeated-split diagnostics, bootstrap summaries, and perturbation robustness tables
- Figures for prediction intervals, coverage-width trade-offs, repeated-split coverage and width, bootstrap comparisons, input perturbation effects, and small-sample robustness
- `report/results_digest.md`, `report/mini_report.md`, and `report/figures_to_use.md`

## What I Learned

Prediction quality is not only about point accuracy. On this dataset, split conformal prediction improved empirical coverage compared with approximate GPR intervals, while wider intervals reflected the cost of reliability. The input-perturbation stress test also showed that clean-data calibration can fail sharply under distribution shift.

## Repository

[View the GitHub repository](https://github.com/gaoshiqingcuhk/ml-uncertainty-quantification)

## Limitations

The project uses a single structured dataset and a limited set of interval methods. It does not include neural networks, XGBoost, or additional interval methods beyond the completed experiments, and the findings should not be read as universal performance guarantees.
