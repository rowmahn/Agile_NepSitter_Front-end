import myKey from './khaltikey'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "1234567890",
    "productName": "Nepsitter",
    "productUrl": "https://nepsitter.web.app/khalti",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
            toast("payment successful !!")
            const axios = require('axios');

            let data = {
                "token": payload.token,
                "amount": payload.amount
            };
            let config = {
                headers: {'Authorization': myKey.secretKey}
            }
            
            // axios.post("http://localhost:90/checkout", data, config)
            //     .then(response => {
            //         console.log(response.data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config