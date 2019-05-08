module.exports = {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ]
    ],
    plugins: [
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true,
            }
        ], [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
  }