---
title: "Image Inverse Problems: Denoising and Deblurring"
date: 2026-06-01
status: "Completed computational project"
category: "Academic / Technical"
tags: ["Computational Inverse Problems", "Computational Imaging", "Scientific Computing"]
summary: "A reproducible computational study of image denoising and deblurring as inverse problems under controlled synthetic degradations."
role: "Experiment direction, output checks, and interpretation"
tools: ["Python", "NumPy", "pandas", "matplotlib", "scikit-image", "PyTorch"]
repoUrl: "https://github.com/gaoshiqingcuhk/image-inverse-problems"
featured: true
---

## Recovering an Image from a Degraded Observation

Denoising asks how much structure can be recovered when random noise is added
to an image. Deblurring adds another difficulty: a blur operator suppresses fine
detail before noise is introduced. Trying to reverse that operator can amplify
noise rather than recover the original. I used this project to examine how
regularization and image priors change that trade-off.

The experiments use standard grayscale images from scikit-image with synthetic
Gaussian noise and blur. They progress from a single-image baseline to parameter
sweeps, four-image comparisons, and degradation-strength tests. Fixed seeds and
saved settings make individual comparisons reproducible. The robustness studies
retain fixed method parameters rather than retuning each method for every case.

## Classical Priors and a Learned Baseline

Gaussian filtering provides a local smoothing reference. Tikhonov regularization
penalizes squared image gradients, while total variation favors edge-preserving,
piecewise-smooth reconstructions. Non-local means uses patch similarity rather
than only spatial proximity. For deblurring, the comparisons include Tikhonov,
Wiener deconvolution, and iterative Richardson-Lucy updates.

A separate, lightweight CNN experiment uses training patches from `coins`,
`moon`, and `page`, with `camera` as the test image. This is a learned denoiser,
not a learned deblurring model. Its one-time training cost is distinguished from
inference runtime.

<figure>
  <a href="/images/projects/image-inverse-problems/denoising-comparison.webp"><img src="/images/projects/image-inverse-problems/denoising-comparison.webp" width="2200" height="1400" loading="lazy" alt="Camera image before and after Gaussian noise, Gaussian filtering, two Tikhonov settings, and total variation denoising; TV preserves structure better than the smoother outputs in this comparison." /></a>
  <figcaption>Single-image denoising at noise standard deviation 0.10. This earlier comparison excludes non-local means and the CNN. Original output: <a href="https://github.com/gaoshiqingcuhk/image-inverse-problems/blob/452899c936dd27254d4a81560a9a41523545acf6/figures/07_consolidated_visual_comparison.png">07_consolidated_visual_comparison.png</a>.</figcaption>
</figure>

## What the Comparisons Show

PSNR, SSIM, runtime, visual comparisons, and error maps describe different aspects
of restoration. In the four-image NLM comparison, NLM with `h = 0.10` had the
highest average PSNR and marginally highest average SSIM; TV remained competitive
and performed best on `moon`. Rankings changed with noise strength.

In the saved CNN comparison on `camera`, PSNR rose from 20.42 dB for the noisy
input to 26.48 dB for the CNN, below TV at 28.30 dB and NLM at 28.71 dB. That
comparison does not show that learned restoration is generally inferior; it
shows the limits of this small training setup.

<figure>
  <a href="/images/projects/image-inverse-problems/cnn-psnr.png"><img src="/images/projects/image-inverse-problems/cnn-psnr.png" width="1440" height="840" loading="lazy" alt="PSNR bar chart on camera: noisy input 20.42 dB, Gaussian filtering 27.17, TV 28.30, non-local means 28.71, and tiny CNN 26.48." /></a>
  <figcaption>PSNR from the final single-image CNN comparison. Source: <a href="https://github.com/gaoshiqingcuhk/image-inverse-problems/blob/452899c936dd27254d4a81560a9a41523545acf6/results/16_tiny_cnn_denoising_results.csv">saved experiment table</a>.</figcaption>
</figure>

Tikhonov was the most stable deblurring baseline in the tested Gaussian-blur
grid. Very weak regularization amplified artifacts; moderate regularization
improved recovery. PSNR and SSIM preferred different regularization strengths.
Wiener was competitive, while Richardson-Lucy was sensitive to iteration count
and did not exceed the selected Tikhonov or Wiener baselines.

<figure>
  <a href="/images/projects/image-inverse-problems/deblurring-grid.webp"><img src="/images/projects/image-inverse-problems/deblurring-grid.webp" width="3000" height="1200" loading="lazy" alt="Tikhonov deblurring grid: very small lambda produces visible noise and ringing, while moderate lambda stabilizes recovery; the displayed PSNR maximum is at 0.01 and SSIM maximum at 0.05." /></a>
  <figcaption>Gaussian blur with sigma 2.0 and noise sigma 0.01. The tested PSNR maximum occurs at lambda 0.01, while SSIM prefers 0.05. Original output: <a href="https://github.com/gaoshiqingcuhk/image-inverse-problems/blob/452899c936dd27254d4a81560a9a41523545acf6/figures/08_tikhonov_deblurring_visual_grid.png">08_tikhonov_deblurring_visual_grid.png</a>.</figcaption>
</figure>

## Interpretation and Scope

Directing these comparisons and checking their outputs helped me connect
regularization strength with visible failure modes. No single metric or image
settled the comparison. The study does not establish performance on real
photographs with unknown blur, motion blur, or non-Gaussian noise. It uses a small
image set, periodic-boundary FFT models where applicable, and limited CNN
training data; runtime is also implementation- and machine-dependent.

[Repository](https://github.com/gaoshiqingcuhk/image-inverse-problems) ·
[Detailed experimental report](https://github.com/gaoshiqingcuhk/image-inverse-problems/blob/452899c936dd27254d4a81560a9a41523545acf6/report/mini_report.md)
