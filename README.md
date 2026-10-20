# Increased Resolution of Food Intake and Gut Microbiome in Precision Dietary Therapy

**Live site: https://dylanjlennon.github.io/dissertation/**

An interactive, one-page summary of my PhD dissertation (Nutritional Sciences, University of Florida, 2017; chair Peggy R. Borum, PhD).

The dissertation built two tools to measure diet and the gut microbiome at higher resolution:

- **Gut microbiome biogeography.** 16S rRNA (V1 to V3) profiling of lumen and mucosa at 13 longitudes of the gut (26 sites) in 12 neonatal piglets at day of life 1 to 2 and 9 to 10, for 288 samples and 8.8 million reads. Location explained 5.6 to 7.9% of community differences at day 1 to 2 and 30 to 35% by day 9 to 10. Stool predicted small-intestine lumen abundances with R² = 0.67 at day 1 to 2 but only 0.07 by day 9 to 10.
- **Foodomics.** A versioned MySQL database that estimates molecular-level profiles (fatty acids, amino acids, carbohydrate types) for 2,731 brand-name foods by linking Nutrition Facts Labels to 8,789 USDA SR28 reference foods, applied to 8,999 patient-days of intake from a pediatric ketogenic therapy cohort. Fat saturation profiles varied independently of the prescribed ketogenic ratio.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | The site. Plain HTML, CSS and JavaScript, no build step. |
| `data.js` | Every number plotted on the site, transcribed from the dissertation, with table and figure references. |

All charts except the two schematics (sampling design and the resolution ladder) plot values reported in the dissertation.

## Methods in brief

QIIME 1.8 open-reference OTU picking (97%, GreenGenes 13_8), UCHIME chimera removal, site-level geometric-mean normalization (DESeq2 size factors) in place of rarefying, unweighted and weighted UniFrac and Bray-Curtis distances, PERMANOVA and PERMDISP (vegan, 999 permutations), PCoA (phyloseq), Kruskal-Wallis with Benjamini-Hochberg correction. All analysis in R 3.3.1.

## Citation

Lennon D. *Increased Resolution of Food Intake and Gut Microbiome in Precision Dietary Therapy.* PhD dissertation, University of Florida, 2017. ProQuest ISBN 9780438166523.

## Contact

Dylan Lennon, PhD · dylanjlennon@gmail.com · Asheville, NC
