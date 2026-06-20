---
title: "Image Inverse Problems / Denoising MVP"
titleZh: "图像反问题实验项目"
status: "Ongoing exploration"
category: "Academic / Technical"
tags: ["Computational Imaging", "Inverse Problems", "Scientific Computing"]
summary: "A small experimental pipeline for studying image denoising as an entry point to inverse problems."
summaryZh: "从图像去噪出发，理解反问题、正则化、评价指标与参数敏感性。"
role: "Independent project"
tools: ["Python", "NumPy", "pandas", "matplotlib", "scikit-image"]
featured: true
---

## Overview / 项目概览

This project uses image denoising as a concrete entry point to inverse problems. Instead of treating denoising as a single filter call, I organized it as a small experimental pipeline: create or observe degradation, choose a reconstruction method, compare outputs, measure quality, and study how parameters change the result.

这是一个以图像去噪为入口的反问题实验项目。我希望把“加噪—恢复—评价—复盘”做成一条完整、可重复的实验链路，而不只是得到一张看起来更干净的图片。

## What I built / 做了什么

- A repeatable workflow for noisy and reconstructed image comparison
- Gaussian filtering as a simple baseline
- Tikhonov regularization and total variation denoising experiments
- PSNR and SSIM evaluation
- Noise-level and parameter sensitivity analysis
- Multi-image testing and a compact written report

## Methods / 方法

Gaussian filtering provides an intuitive baseline but can smooth important edges. Tikhonov regularization introduces an explicit balance between data fidelity and smoothness. Total variation denoising offers another perspective by encouraging piecewise-smooth reconstructions while preserving sharper transitions.

The main emphasis is not declaring one universally best method. It is understanding what each objective assumes about an image and how those assumptions appear in the reconstructed result.

## Results and reflection / 结果与复盘

PSNR and SSIM provide consistent quantitative reference points, while side-by-side images reveal details that a single metric cannot capture. Sensitivity experiments also make the regularization trade-off visible: parameters that suppress more noise can also remove texture or soften edges.

I am keeping this page qualitative until the underlying result tables and figures are published alongside the project. No numerical claims are shown here without a verifiable source.

## Next steps / 下一步

- Organize the experiment code and figures into a public repository
- Publish the mini report and reproducible parameter settings
- Compare behavior across a wider range of image structures and noise levels
