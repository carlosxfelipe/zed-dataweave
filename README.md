# Zed DataWeave Extension

DataWeave language support for the [Zed](https://zed.dev) editor.

## Development 🦀

To use and test this extension locally without publishing it, you can load it in Zed's Dev Mode. Zed will automatically compile the Rust code to WebAssembly (Wasm) and reload the extension whenever you make changes.

### Prerequisites

Ensure you have Rust and Cargo installed. You will also need the WebAssembly target:

```bash
rustup target add wasm32-wasip1
```

### Tree-sitter Grammar Setup

This extension maintains its own Tree-sitter grammar locally in the `tree-sitter-dataweave` directory. To generate the C parser from the `grammar.js` rules, you need the Tree-sitter CLI installed natively via Cargo:

```bash
cargo install tree-sitter-cli
```

Whenever you modify `tree-sitter-dataweave/grammar.js`, you must re-generate the grammar, commit your changes, and update the revision hash in `extension.toml`:

```bash
cd tree-sitter-dataweave
tree-sitter generate
git add .
git commit -m "Update grammar"
git rev-parse HEAD # Copy this hash to 'rev' in extension.toml
```

**Note:** The generated `src/` directory containing the C code must be tracked in version control, but the compiled `*.wasm` binaries should remain ignored.

### Loading in Zed (Dev Mode)

1. Open the Zed editor.
2. Open the command palette (`Cmd` + `Shift` + `P` on macOS).
3. Type and select `zed: extensions` to open the extensions panel.
4. Click the **Install Dev Extension** button in the top right corner of the panel.
5. In the file selection window, navigate to and select this repository's root folder.
6. Zed will build the Rust project. Once successful, the extension will appear in your installed list with a "Dev" tag.

Any changes made to the Tree-sitter queries or the Rust source files will be detected by Zed, triggering an automatic rebuild.
