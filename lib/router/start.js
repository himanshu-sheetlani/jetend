import loadConfig from '../core/loadConfig.js'
const config = await loadConfig()

export default function start(port){
    const PORT = port || config.port || 3000
    const autoStart = config.autoStart !== false

    if (autoStart) {
    app.listen(PORT, () => {
        console.log(`🚀 Jetend server running at http://localhost:${PORT}`);
    });
    }
}