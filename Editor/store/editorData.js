export const state = () => ({
  data: {
    tokens: [
      "Dies",
      "ist",
      "ein",
      "einfacher",
      "Test",
      ".",
      "In",
      "diesem",
      "Beispiel",
      "werden",
      "verschiedene",
      "Annotationen",
      "erprobt",
      "!"
    ],
    above: [
      "PDS",
      "VAFIN",
      "ART",
      "ADJA",
      "NN",
      "$.",
      "APPR",
      "PDAT",
      "NN",
      "VAFIN",
      "NN",
      "NN",
      "VVPP",
      "$."
    ],
    below: [
      "dies",
      "sein",
      "eine",
      "einfach",
      "Test",
      ".",
      "in",
      "dies",
      "Beispiel",
      "werden",
      "verschiedene",
      "Annotation",
      "erproben",
      "!"
    ],
    annotations: [
      { fromToken: 0, toToken: 1, annoId: "XYZ123", id: 1 }, // Annotation eines einzelnen Tokens
      { fromToken: 3, toToken: 5, annoId: "XYZ456", id: 2 }, // Annotation mehrerer Tokens
      { fromId: 1, toId: 2, annoId: "XYZ456", id: 3 },
    ], // Meta-Annotation zwischen zwei Annotations
    schema: {
      XYZ123: {
        color: "#f00",
        label: "Irgendetwas",
        category: "Test",
      },
      XYZ456: {
        color: "#0f0",
        label: "Nomen",
        category: "POS",
      },
    },
  },
});

export const mutations = {
  tokens_set(state, tokens) {
    state.data.tokens = tokens;
  },
  annotations_set(state, annotations) {
    state.data.annotations = annotations;
  },
  annotations_add(state, annotation) {
    state.data.annotations.push(annotation);
  },
};
