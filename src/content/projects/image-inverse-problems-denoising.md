---
title: "Image Inverse Problems / Denoising MVP"
date: "2026-03-12"
tags: ["Computational Imaging", "Inverse Problems", "Optimization"]
summary: "A small minimum viable project exploring image denoising as an inverse problem with classical regularization ideas."
role: "Independent student project"
tools: ["Python", "NumPy", "Matplotlib", "scikit-image"]
repoUrl: "https://github.com/your-username/image-denoising-mvp"
demoUrl: ""
featured: true
---

## Background

Image denoising can be viewed as a simple inverse problem: recover a clean image from an observed image corrupted by noise. This project starts with a deliberately small scope so the mathematical assumptions are easy to inspect.

## Method

The MVP compares a baseline smoothing method with a regularized reconstruction objective. The main idea is to balance fidelity to the noisy observation with a penalty that discourages unstable or overly rough reconstructions.

## Results

The early experiments show the expected tradeoff: stronger regularization removes more noise but can blur edges and fine details. Visual comparisons and simple metrics help make that tradeoff concrete.

## Technical Stack

- Python for experiment scripts
- NumPy for array operations
- Matplotlib for visual comparison plots
- scikit-image for sample images and basic quality metrics

## Next Steps

- Add total variation regularization
- Compare Gaussian, salt-and-pepper, and Poisson noise
- Write a short note explaining the optimization objective
- Build a small interactive demo for parameter tuning
