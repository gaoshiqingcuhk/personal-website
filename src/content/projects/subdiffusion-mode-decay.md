---
title: "Subdiffusion Mode Decay"
date: 2026-05-20
status: "Completed toy numerical project"
category: "Academic / Technical"
tags: ["Subdiffusion", "Spectral Methods", "Inverse Problems"]
summary: "A small spectral visualization project comparing Fourier mode decay in normal diffusion and time-fractional subdiffusion on a one-dimensional interval."
role: "Independent numerical exploration"
tools: ["Python", "NumPy", "matplotlib"]
repoUrl: "https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay"
featured: true
---

## Overview

This is a small spectral visualization project comparing Fourier mode decay in normal diffusion and time-fractional subdiffusion on the one-dimensional interval Omega = (0, 1).

The project uses a simple sine eigenbasis to make the difference between exponential diffusion decay and slower subdiffusive decay visible. The Mittag-Leffler function is approximated with a lightweight piecewise implementation for qualitative visualization.

## What I Studied / Implemented

- Sine eigenbasis on Omega = (0, 1)
- Normal diffusion decay of the form exp(-lambda_n t)
- Subdiffusion decay through a Mittag-Leffler-type factor
- High-frequency decay signatures related to inverse problems with unknown terminal time
- Numerical plots for comparing mode behavior across frequencies and times
- Noise sensitivity of high-frequency terminal coefficients

## Methods or Workflow

The implementation computes eigenvalues and mode amplitudes for a simple one-dimensional spectral setting. It then compares how each mode decays under normal diffusion and under a time-fractional subdiffusion model.

The project is designed to build intuition from a small numerical example before moving to more complicated inverse-problem settings.

## Outputs

- Five figures covering mode decay, high-frequency signatures, terminal profiles by alpha, terminal profiles by terminal time, and noise sensitivity
- CSV outputs: `mode_decay_table.csv`, `high_frequency_signature_table.csv`, and `profile_grid.csv`
- A small, inspectable Python codebase
- Repository README documentation

## What I Learned

The visualization makes high-frequency decay behavior easier to see. It also clarifies why terminal-time information and decay rates matter when thinking about inverse problems involving diffusion-type models.

## Repository

[View the GitHub repository](https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay)

## Limitations

This is a toy spectral visualization, not a full inverse solver or a full reproduction of a paper. The Mittag-Leffler values are approximated for qualitative visualization. The project does not implement Levenberg-Marquardt methods, finite element methods, 2D problems, or a complete parameter-recovery pipeline.
