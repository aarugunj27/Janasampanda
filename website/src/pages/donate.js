import React from "react";
import './css.style.css';

function Donate() {
    return (
        <div className="text">
            <h1>Donate</h1>
        </div>
        <GooglePayButton
        enviornment="TEST"
        paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA', 'AMERICAN EXPRESS'],
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY', 
                    parameters: {
                        gateway: 'example'
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                },
            },
        ],
        merchantInfo: {
            merchantId: '1234567890'
            merchantName: 'Demo Merchant',
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '10',
            currencyCode: 'IND',
            countryCode: 'US',
        },
    }}
    onLoadPaymentData={paymentRequest => {
        console.log('load payment data', paymentRequest);
    }}
    onPaymentAuthorized={paymentData => {
        console.log('Payment Authorised Sucess', paymentData)
        return { transactionState: 'SUCCESS' }
      }
    }
    />
    )
}

export default Donate;
