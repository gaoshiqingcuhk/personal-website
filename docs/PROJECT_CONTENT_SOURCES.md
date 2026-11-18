# Project Content Sources

This file records the evidence used for the six project pages. It is not
published as a website page. The source project repositories were read only.

## Ongoing Research

The Lean formalization and AI-assisted proof-auditing descriptions use the
website owner's supplied public scope and involvement statements. No private
collaboration code or pilot records were accessed or copied. No dates,
performance numbers, or public repository links were added to these entries.

## Public Computational Repositories

The following snapshots were verified through GitHub's tree API. Referenced
reports, CSV files, and figures matched the local files (text comparison
normalized Windows line endings). The local image-project README differed,
so the detailed report and result tables are the quantitative sources.

| Project | Commit | Evidence |
| --- | --- | --- |
| image-inverse-problems | 452899c936dd27254d4a81560a9a41523545acf6 | report/mini_report.md; results/16_tiny_cnn_denoising_results.csv; figures 07, 08, and 16 |
| ml-uncertainty-quantification | 4333dac6d25ec1670c7f34cf2e68044f2b47a8fb | report/results_digest.md; results/mvp_interval_summary.csv; results/conformal_summary.csv; results/bootstrap_residual_corrected_summary.csv; results/input_perturbation_robustness.csv |
| subdiffusion-mode-decay | b5a59d8d7f580c73f7c8be820880c94981a982b8 | README.md; src/mittag_leffler.py; figures/02_high_frequency_signature.png |

The four existing project dates are retained from the website; they were not
newly inferred from repository or filesystem timestamps.

## Local Thermal Modeling Sources

Sources were read from the owner's supplied chip-thermal-management folder,
under the nested 2026 APMCM problem directory:

- mathematical-modeling-optimization/README.md
- mathematical-modeling-optimization/outputs/tables/table_03_model_cv_metrics.csv
- mathematical-modeling-optimization/outputs/tables/table_23_solution_stability_summary_common_norm.csv
- mathematical-modeling-optimization/outputs/figures/fig_27_common_norm_composite_boxplot.png
- APMCM_B_chip_thermal/paper/main_draft.md

The manufacturing comparison uses common-normalization composite scores.
Weight sampling and manufacturing perturbations are separate analyses.
No original competition workbook, submission, private identifiers, or external
repository link was added to the website.

## Website Figure Copies

All copies are under public/images/projects. Captions identify the original
outputs and link to public evidence where available.

| Website file | Original file |
| --- | --- |
| image-inverse-problems/denoising-comparison.webp | figures/07_consolidated_visual_comparison.png |
| image-inverse-problems/deblurring-grid.webp | figures/08_tikhonov_deblurring_visual_grid.png |
| image-inverse-problems/cnn-psnr.png | figures/16_tiny_cnn_denoising_psnr.png |
| uncertainty-quantification/input-perturbation.png | figures/input_perturbation_coverage.png |
| subdiffusion/high-frequency-signature.png | figures/02_high_frequency_signature.png |
| modeling/manufacturing-robustness.png | outputs/figures/fig_27_common_norm_composite_boxplot.png |

The two WebP files use lossless encoding; decoded pixels were checked against
the original PNGs. The four smaller PNGs are byte-for-byte copies. No plots
were generated, relabeled, cropped, or retouched.

## Interpretation Checks

- UQ interval comparisons share held-out targets, but the approximate GPR and
  conformal models use different training sizes. The webpage states this.
- The bootstrap comparison uses the matched-split residual-correction table,
  not the earlier bootstrap experiment with different training conditions.
- Input perturbation affects all standardized features and can leave the
  data manifold; it is not a validated measurement-error model.
- The subdiffusion plateau comes directly from the approximation's asymptotic
  branch and is not an independent verification of asymptotic accuracy.
- The small CNN is a denoiser, not a deblurring model.
- Thermal recommendations are surrogate-based, not new CFD or hardware results.
