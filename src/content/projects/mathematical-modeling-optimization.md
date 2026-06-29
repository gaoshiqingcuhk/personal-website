---
title: "Mathematical Modeling and Optimization"
date: 2026-04-15
status: "Completed computational modeling workflow"
category: "Academic / Technical"
tags: ["Mathematical Modeling", "Optimization", "Surrogate Modeling"]
summary: "A chip thermal management modeling project using surrogate models, multi-objective optimization, weight sensitivity analysis, and Monte Carlo robustness checks."
role: "Independent practice project"
tools: ["Python", "NumPy", "pandas", "matplotlib", "LaTeX"]
featured: true
---

## Overview

This project records a computational modeling and optimization workflow for a high-performance chip thermal management problem. The work combines data processing, exploratory analysis, surrogate modeling, multi-objective optimization, weight sensitivity analysis, and robustness checks.

The emphasis is on building a defensible modeling pipeline with clear assumptions, reproducible outputs, and readable tables and figures.

## What I Studied / Implemented

- Data cleaning and normalization for chip thermal performance data
- Surrogate models for thermal resistance, pressure drop, and temperature nonuniformity
- Model comparison with Gaussian process regression and polynomial response-surface models
- Pareto analysis, weighted-sum ranking, and TOPSIS ranking
- Dense surrogate search over the design space
- Weight-scenario analysis and random weight sampling
- Monte Carlo manufacturing-perturbation checks and flow-rate fluctuation analysis

## Methods or Workflow

The workflow begins with cleaning and exploring the provided performance data, then builds surrogate models for the three target quantities. The optimization stage compares sample-space candidates and surrogate-search candidates using Pareto filtering, weighted sums, and TOPSIS.

The robustness stage studies how recommendations change under different objective weights, local parameter perturbations, discrete pin-row changes, Monte Carlo manufacturing errors, and approximate flow-rate fluctuations.

## Outputs

- Processed and normalized datasets
- Saved surrogate models and model-selection summaries
- Tables for data description, model metrics, Pareto candidates, top ranked designs, weight scenarios, robustness metrics, and Monte Carlo outputs
- Figures for main effects, correlation heatmap, model prediction checks, Pareto fronts, candidate comparison, weight sensitivity, robustness metrics, local sensitivity, Monte Carlo distributions, and flow-rate fluctuation
- A written modeling paper and supporting figure/table checklists

## What I Learned

The project helped me practice connecting modeling assumptions to numerical outputs. The optimization did not reduce to a single universal answer: the main recommended design and robust alternatives depend on how average performance, stability, and risk are weighted.

## Limitations

The project is presented as a computational modeling workflow, not as a competition result or a research claim. The conclusions are based on surrogate predictions and engineering approximations, not new CFD simulations. They depend on the chosen normalization, objective weights, perturbation assumptions, and available data.
