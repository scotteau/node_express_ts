import * as http from "http";
import {app} from "./app";


const PORT = process.env.PORT || 3000;


function start() {
    try {
        http.createServer(app).listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start();