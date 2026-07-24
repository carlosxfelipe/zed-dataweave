use zed_extension_api as zed;

struct DataWeaveExtension {
    // State can be stored here if needed (e.g. LSP information).
}

impl zed::Extension for DataWeaveExtension {
    fn new() -> Self {
        Self {}
    }

    fn language_server_command(
        &mut self,
        _language_server_id: &zed::LanguageServerId,
        _worktree: &zed::Worktree,
    ) -> zed::Result<zed::Command> {
        // If there's a DataWeave LSP in the future, configure how to start it here.
        Err("LSP not implemented yet".into())
    }
}

zed::register_extension!(DataWeaveExtension);
