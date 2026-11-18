---
title: "Subdiffusion Mode Decay"
date: 2026-05-20
status: "Completed toy numerical project"
category: "Academic / Technical"
tags: ["Subdiffusion", "Spectral Methods", "Inverse Problems"]
summary: "A small spectral visualization project comparing Fourier mode decay in normal diffusion and time-fractional subdiffusion on a one-dimensional interval."
role: "Experiment direction and interpretation of spectral outputs"
tools: ["Python", "NumPy", "SciPy", "matplotlib"]
repoUrl: "https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay"
featured: true
---

## What Survives Diffusion?

This small numerical project examines how Fourier modes decay in normal diffusion
and time-fractional subdiffusion. The motivation comes from inverse problems
with an unknown terminal time: if an evolution erases fine-scale information,
what can its final state still reveal about when it was observed?

The setting is the interval (0, 1), using the sine eigenfunctions and eigenvalues:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>&#x3C6;</mi><mi>n</mi></msub><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>sin</mi><mo>(</mo><mi>n</mi><mi>&#x3C0;</mi><mi>x</mi><mo>)</mo><mo>,</mo><mspace width="1em"/><msub><mi>&#x3BB;</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo>(</mo><mi>n</mi><mi>&#x3C0;</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>.</mo></mrow></math>

For normal diffusion the modal multiplier is
<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>e</mi><mrow><mo>&#x2212;</mo><msub><mi>&#x3BB;</mi><mi>n</mi></msub><mi>t</mi></mrow></msup></math>.
For time-fractional order
<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0</mn><mo>&lt;</mo><mi>&#x3B1;</mi><mo>&lt;</mo><mn>1</mn></mrow></math>,
it is
<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>E</mi><mrow><mi>&#x3B1;</mi><mo>,</mo><mn>1</mn></mrow></msub><mo>(</mo><mo>&#x2212;</mo><msub><mi>&#x3BB;</mi><mi>n</mi></msub><msup><mi>t</mi><mi>&#x3B1;</mi></msup><mo>)</mo></mrow></math>,
where E is the Mittag-Leffler function. At a fixed positive time, normal
diffusion suppresses high frequencies exponentially in the eigenvalue.
Subdiffusion instead has an algebraic high-frequency tail.

## A Signature of Terminal Time

The leading large-argument asymptotic gives the following high-frequency limit
for a fixed terminal time T:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>&#x3BB;</mi><mi>n</mi></msub><msub><mi>E</mi><mrow><mi>&#x3B1;</mi><mo>,</mo><mn>1</mn></mrow></msub><mo>(</mo><mo>&#x2212;</mo><msub><mi>&#x3BB;</mi><mi>n</mi></msub><msup><mi>T</mi><mi>&#x3B1;</mi></msup><mo>)</mo><munder><mo>&#x2192;</mo><mrow><mi>n</mi><mo>&#x2192;</mo><mi>&#x221E;</mi></mrow></munder><mfrac><mn>1</mn><mrow><mi>&#x393;</mi><mo>(</mo><mn>1</mn><mo>&#x2212;</mo><mi>&#x3B1;</mi><mo>)</mo><msup><mi>T</mi><mi>&#x3B1;</mi></msup></mrow></mfrac><mo>.</mo></mrow></math>

The corresponding eigenvalue-weighted normal-diffusion multiplier tends to zero.
The contrast suggests why high-mode behavior can carry terminal-time information,
but a visible signature is not itself a parameter-recovery algorithm.

<figure>
  <a href="/images/projects/subdiffusion/high-frequency-signature.png"><img src="/images/projects/subdiffusion/high-frequency-signature.png" width="1600" height="1000" loading="lazy" alt="At terminal time 0.5, the eigenvalue-weighted normal diffusion factor falls toward zero while subdiffusion factors for alpha 0.25, 0.5, and 0.75 lie on their asymptotic reference levels." /></a>
  <figcaption>Eigenvalue-weighted decay factors at T = 0.5. The fractional curves coincide with the reference levels because the implementation uses the leading asymptotic branch at these arguments; this is not an independent numerical verification of the limit. Original output: <a href="https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay/blob/b5a59d8d7f580c73f7c8be820880c94981a982b8/figures/02_high_frequency_signature.png">02_high_frequency_signature.png</a>.</figcaption>
</figure>

## How the Visualization Was Organized

The saved outputs compare mode decay, the weighted signature, and synthetic
terminal profiles as fractional order or terminal time varies. The profile
experiments start with sine coefficients `a_n = 1/n^2`. Another experiment adds
Gaussian noise to terminal coefficients and shows how high-mode signatures become
unstable. CSV tables accompany the figures so that the plotted quantities can
be inspected separately.

I focused on examining these outputs and relating them to the spectral argument.
The noise experiment was particularly useful: slower modal decay does not remove
the practical difficulty of extracting information from small, noisy coefficients.

## Approximation, Not a Solver

The implementation uses the defining Mittag-Leffler series only for arguments
up to 0.5, switches directly to its leading asymptotic above 0.5, and clips values
to [0, 1]. This avoids unstable series evaluation, but does not provide
error-controlled accuracy in the intermediate regime; the hard switch can also
distort behavior near the threshold.

Consequently, this is a qualitative spectral visualization, not a complete inverse
solver or a high-precision special-function experiment. It includes no finite
element discretization, two-dimensional problem, or numerical recovery of the
unknown terminal time.

Sources: [repository explanation](https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay/blob/b5a59d8d7f580c73f7c8be820880c94981a982b8/README.md)
and [piecewise approximation](https://github.com/gaoshiqingcuhk/subdiffusion-mode-decay/blob/b5a59d8d7f580c73f7c8be820880c94981a982b8/src/mittag_leffler.py).
