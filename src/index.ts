import 'database'

import env from 'config/environments'
import app from 'app'

const { host } = env

app.listen(host.port, () => {
    console.log(`server listen on port: ${host.port}`);    
})
