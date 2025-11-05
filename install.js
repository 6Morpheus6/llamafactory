module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/hiyouga/LLaMA-Factory app",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install devicetorch tiktoken bitsandbytes",
          "uv pip install -e .[metrics]",
          "uv pip install transformers==4.50.0"
        ]
      }
    }
  ]
}
