import React from "react";
import './static/css/style.css';
import GooglePayButton from '@google-pay/button-react';
import './static/css/style.css';

function Donate() {
    return (
      <div className="button">
        <title>Donate</title>
        <h1>Donate Today!</h1>
        <GooglePayButton className="button"
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA', 'DISCOVER', 'AMEX'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: '12345678901234567890',
              merchantName: 'Demo Merchant',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '100.00',
              currencyCode: 'USD',
              countryCode: 'US',
            },
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('load payment data', paymentRequest);
          }}
          buttonType="donate"
        />
      </div>  
    )
}

export default Donate;
