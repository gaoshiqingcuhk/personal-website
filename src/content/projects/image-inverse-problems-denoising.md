---
title: "Image Inverse Problems: Denoising and Deblurring"
date: 2026-06-01
status: "Completed computational project"
category: "Academic / Technical"
tags: ["Computational Inverse Problems", "Computational Imaging", "Scientific Computing"]
summary: "A reproducible computational study of image denoising and deblurring as inverse problems under controlled synthetic degradations."
role: "Independent undergraduate project"
tools: ["Python", "NumPy", "pandas", "matplotlib", "scikit-image"]
repoUrl: "https://github.com/gaoshiqingcuhk/image-inverse-problems"
featured: true
---

## Overview

This project studies image denoising and deblurring as representative image inverse problems. I used controlled synthetic degradations to compare reconstruction behavior across classical filtering, variational regularization, non-local patch-based methods, frequency-domain deconvolution, iterative deconvolution, and a lightweight CNN denoising baseline.

The project is framed as a reproducible undergraduate computational study rather than a new reconstruction method or a state-of-the-art claim.

## What I Studied / Implemented

- Denoising and deblurring as inverse problems
- Gaussian filtering as a simple denoising baseline
- Tikhonov regularization and total variation Chambolle denoising
- Non-local means as a patch-based image-prior method
- Wiener and Richardson-Lucy deconvolution for deblurring
- A small CPU-friendly CNN denoising baseline for comparison
- PSNR, SSIM, runtime, visual comparisons, and error maps
- Noise-level, blur-strength, parameter-sensitivity, and robustness checks

## Methods or Workflow

The workflow starts by applying controlled noise or blur to sample grayscale images, then reconstructs the image with several methods. Each experiment records reconstruction settings, visual outputs, quantitative metrics, runtime information, and metadata so that the comparison is easier to inspect later.

The repository is organized as a sequence of numbered scripts, from early denoising baselines through deblurring experiments, robustness analysis, and the lightweight CNN baseline. Classical regularization and image-prior methods are treated as strong reference baselines. The learning-based baseline is exploratory and is included mainly to compare behavior, not to claim a superior model.

## Outputs

- Reproducible experiment scripts and saved configuration/metadata
- CSV outputs for metrics, runtime, sensitivity studies, and method comparisons
- Figures for visual comparisons, error maps, parameter sensitivity, and robustness checks
- A small CNN checkpoint and training-history outputs
- README, project summary, report notes, and figure/result indexes

## What I Learned

Classical methods remain strong, interpretable baselines in small controlled inverse-problem experiments. In the completed runs, TV denoising and non-local means were often competitive for denoising, while Tikhonov-style deblurring was a stable baseline in the synthetic Gaussian-blur setting. The lightweight CNN improved over noisy inputs but did not outperform stronger classical baselines in this small CPU-friendly setup.

The project made the trade-off between noise removal, edge preservation, runtime, and parameter choice visible both in metrics and in reconstructed images.

## Repository

[View the GitHub repository](https://github.com/gaoshiqingcuhk/image-inverse-problems)

## Limitations

The experiments use controlled synthetic Gaussian noise and blur on small grayscale images, so the conclusions should not be read as general claims about real-world image restoration. The project does not cover real-world datasets, blind restoration, motion blur, or alternative boundary models. The CNN baseline is intentionally small and limited by the available training setup.
