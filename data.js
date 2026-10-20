// All values transcribed from: Lennon D. Increased Resolution of Food Intake and Gut Microbiome
// in Precision Dietary Therapy. PhD dissertation, University of Florida, 2017.
// Table/figure numbers refer to the dissertation.
window.DISS = {
  regions: ["Duodenum", "Jejunum", "Ileum", "Colon"],
  regionSites: [[1,2,3],[4,5,6],[7,8,9],[10,11,12,13]],

  // Table 2-2: samples analyzed per site
  samples: {
    lumen:  [12,12,12,11,11,12,11,11,12,12,11,12,11],
    mucosa: [12,9,9,10,11,10,12,11,10,11,12,11,10]
  },

  // Table 2-1 and sequence analysis text
  reads: { raw: 8813882, qc: 5794431, joined: 5721002, avgLen: 478, otus: 21129, samples: 288, piglets: 12 },

  // Table 2-5: phylum share of all sequences (%)
  phylaOverall: {
    order: ["Firmicutes","Proteobacteria","Bacteroidetes","Cyanobacteria","TM7","Actinobacteria","Fusobacteria"],
    young: { Firmicutes:65.8, Bacteroidetes:0.5, Proteobacteria:27.4, TM7:0, Fusobacteria:0.1, Cyanobacteria:4.6, Actinobacteria:1.7 },
    old:   { Firmicutes:69.4, Bacteroidetes:13.9, Proteobacteria:10.8, TM7:2.8, Fusobacteria:1.4, Cyanobacteria:1.3, Actinobacteria:0.3 },
    notes: { young: { TM7: "not detected" } }
  },

  // Tables 2-9 to 2-12: relative abundance by region, mean and SD; q = Kruskal-Wallis q-value across regions
  // null = phylum not reported in that table
  regional: {
    old: {
      lumen: {
        TM7:            { m:[0.21,0.63,0.68,0],     sd:[0.36,1.24,1.31,0],   q:"< 0.001" },
        Fusobacteria:   { m:[0.22,0.25,0.31,2.67],  sd:[0.32,0.34,0.64,5.56],q:"> 0.1" },
        Bacteroidetes:  { m:[0.5,0.18,0.2,14.37],   sd:[0.83,0.26,0.23,7.01],q:"< 0.001" },
        Proteobacteria: { m:[1.87,4.92,7.42,0.35],  sd:[1.79,7.2,8.34,0.9],  q:"< 0.001" },
        Cyanobacteria:  { m:[0.04,0.01,0.03,0],     sd:[0.13,0.03,0.05,0],   q:"< 0.001" },
        Actinobacteria: { m:[0.24,0.34,0.26,0],     sd:[0.35,0.8,0.38,0],    q:"< 0.001" },
        Synergistetes:  { m:[0,0,0,0.04],           sd:[0,0,0,0.08],         q:"< 0.001" },
        Tenericutes:    { m:[0,0,0,0],              sd:[0,0,0.01,0],         q:"0.06" },
        Firmicutes:     { m:[30.26,27,26.39,9.85],  sd:[12.9,13.28,17.81,6.78], q:"< 0.001" }
      },
      mucosa: {
        TM7:            { m:[0.27,1.09,0.65,0],     sd:[0.39,1.83,1.26,0.01],q:"< 0.001" },
        Fusobacteria:   { m:[0.14,0.22,0.37,1.9],   sd:[0.19,0.3,0.66,4.8],  q:"> 0.1" },
        Bacteroidetes:  { m:[1.14,0.77,1.17,12.65], sd:[1.21,0.86,1.7,7.99], q:"< 0.001" },
        Proteobacteria: { m:[8.23,6.79,7.49,3.18],  sd:[7.14,6.25,6.71,9.26],q:"< 0.001" },
        Cyanobacteria:  { m:[0.68,0.18,0.19,0.01],  sd:[1.26,0.23,0.27,0.02],q:"< 0.001" },
        Actinobacteria: { m:[1.7,1.11,1.2,0.18],    sd:[1.81,1.46,1.07,0.43],q:"< 0.001" },
        Synergistetes:  { m:[0,0,0,0.03],           sd:[0,0,0.01,0.06],      q:"< 0.001" },
        Tenericutes:    { m:[0,0,0,0],              sd:[0,0.01,0,0],         q:"< 0.05" },
        Firmicutes:     { m:[30.69,25.14,24.23,8.14], sd:[27.54,17.18,17.25,4.31], q:"< 0.05" }
      }
    },
    young: {
      lumen: {
        TM7: null,
        Fusobacteria:   { m:[0,0,0,0.14],           sd:[0.02,0,0,0.29],      q:"< 0.001" },
        Bacteroidetes:  { m:[0.05,0.02,0,0.02],     sd:[0.08,0.04,0,0.03],   q:"> 0.1" },
        Proteobacteria: { m:[5.92,7.58,9.46,10.37], sd:[7.92,6.18,8.71,8.42],q:"> 0.1" },
        Cyanobacteria:  { m:[0.62,0.04,0,1.13],     sd:[1.07,0.11,0,4.24],   q:"< 0.05" },
        Actinobacteria: { m:[0.27,0.08,0.01,0.19],  sd:[0.54,0.14,0.01,0.54],q:"< 0.05" },
        Synergistetes: null, Tenericutes: null,
        Firmicutes:     { m:[26.47,32.27,26.88,14.82], sd:[15.84,23.93,13.32,14.66], q:"< 0.05" }
      },
      mucosa: {
        TM7: null,
        Fusobacteria:   { m:[0.01,0,0,0.05],        sd:[0.04,0,0,0.07],      q:"< 0.05" },
        Bacteroidetes:  { m:[0.76,0.35,0.17,0.09],  sd:[0.9,0.4,0.24,0.13],  q:"< 0.05" },
        Proteobacteria: { m:[11.69,8.08,6.8,12.22], sd:[7.21,6.81,5.72,7.07],q:"< 0.05" },
        Cyanobacteria:  { m:[7.11,2.25,1.9,0.51],   sd:[8.32,3.79,4.34,1.31],q:"< 0.05" },
        Actinobacteria: { m:[2.6,0.63,0.93,1.69],   sd:[2.63,0.49,1.83,3.17],q:"> 0.1" },
        Synergistetes: null, Tenericutes: null,
        Firmicutes:     { m:[16.29,25.05,28.66,12.13], sd:[16.28,18.44,22.49,8.38], q:"< 0.05" }
      }
    }
  },

  // Tables 2-6, 2-7, 2-8: variance in community structure explained by gut location (PERMANOVA R2, %), 999 permutations
  location: {
    unweighted: { label:"Unweighted UniFrac", young:{lumen:[5.6,"0.014"], mucosa:[7.9,"0.001"]}, old:{lumen:[34.5,"0.001"], mucosa:[30.3,"0.001"]} },
    weighted:   { label:"Weighted UniFrac",   young:{lumen:[12.7,"0.007"],mucosa:[10.0,"0.014"]}, old:{lumen:[21.4,"0.001"], mucosa:[18.6,"0.001"]} },
    bray:       { label:"Bray-Curtis",        young:{lumen:[9.5,"0.001"], mucosa:[11.1,"0.001"]}, old:{lumen:[19.4,"0.001"], mucosa:[16.7,"0.001"]} }
  },
  // Table 2-13: effect of radius (lumen vs mucosa), unweighted UniFrac
  radius: { young:{small:[14.8,"0.001"], large:[11.7,"0.003"]}, old:{small:[8.4,"0.001"], large:[3.2,"0.147"]} },
  // Table 2-19: effect of age (day 1-2 vs day 9-10)
  age: { small:{lumen:[31.0,"0.001"], mucosa:[19.2,"0.001"]}, large:{lumen:[41.8,"0.001"], mucosa:[39.8,"0.001"]} },

  // Figure 2-14: R2 of linear regression, abundance of shared OTUs at gut sites vs stool
  stool: {
    young: { small:{lumen:0.67, mucosa:0.40}, large:{lumen:0.70, mucosa:0.69} },
    old:   { small:{lumen:0.07, mucosa:0.001, mucosaLess:true}, large:{lumen:0.51, mucosa:0.02} }
  },

  // Table 2-3: occupancy classification
  occupancy: {
    young: [ ["Always high",38.0,4], ["Switch",52.1,351], ["Always low",9.9,20774] ],
    old:   [ ["Always high",14.2,1], ["Switch",64.3,689], ["Always low",21.5,20439] ]
  },

  // Chapter 3: foodomics database
  foodomics: {
    collections: 8557, brandFoods: 2731, usda: 8789, manual: 17, totalProfiles: 17363,
    years: "1997 to 2016",
    topCategories: [["Dairy and egg",1403],["Meats",1076],["Baby foods",1047],["Fats and oils",687],["Vegetables",666]],
    recollected: 964, changed: 449, changedPct: 46.5, changes: 1411,
    // Table 3-2: % of changes, by macronutrient and magnitude
    changeMag: { labels:[">1%",">5%",">10%",">90%"], protein:[26.4,23.0,17.6,2.8], fat:[23.9,20.9,14.5,2.4], carb:[47.4,39.6,30.9,7.0] }
  },

  // Chapter 4: clinical application
  clinical: { days: 8999, oral: 24, tube: 23, both: 6, maxYears: 20,
    strata: [["Low","< 2.5:1"],["Moderately low","2.5 to 3.5:1"],["Typical","3.5 to 4.5:1"],["Above typical","> 4.5:1"]] }
};
