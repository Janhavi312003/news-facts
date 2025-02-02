import NeucronSDK from "neucron-sdk";

/** @type {import('./$types').Actions} */

export const actions = {

    login: async ({ request }) => {
    const data = await request.formData();

    const neucron = new NeucronSDK();
    
    const authModule = neucron.authentication;
    const walletModule = neucron.wallet;
    
    // // const signUpResponse = await authModule.signUp({ email: "shubhamwebthree@gmail.com", password: "Shubham@1234" });
    // // console.log(signUpResponse);
    
    const loginResponse = await authModule.login({ email:data.get('email') , password:data.get('password') });
    console.log(loginResponse);

    const DefaultWalletBalance = await walletModule.getWalletBalance({});
    console.log(DefaultWalletBalance);

    // const walletCreation1 = await walletModule.createWallet({ walletName: 'HelloShubham' });
    // console.log(walletCreation1);
    
    const addresses = await walletModule.getAddressesByWalletId({});
    console.log(addresses);
    

    return { success: true, address:addresses.data.addresses[0] , balance : DefaultWalletBalance.data.balance.summary }; 
    },  
    signup: async ({ request }) => {
      const data = await request.formData();
  
      const neucron = new NeucronSDK();
      
      const authModule = neucron.authentication;
      const walletModule = neucron.wallet;
      
      const signUpResponse = await authModule.signUp({  email:data.get('email') , password:data.get('password')  });
      console.log(signUpResponse);
      
      // const loginResponse = await authModule.login({ email:data.get('email') , password:data.get('password') });
      // console.log(loginResponse);
  
      // const DefaultWalletBalance = await walletModule.getWalletBalance({});
      // console.log(DefaultWalletBalance);
  
      return { success: true }; 
      },

      // pubkey: async ({ request }) => {
      //   const data = await request.formData();
    
      //   const neucron = new NeucronSDK();
        
      //   const authModule = neucron.authentication;
      //   const walletModule = neucron.wallet;
        
      //   const walletCreation1 = await walletModule.createWallet({ walletName: 'HelloShubham' });
      //   // console.log(walletCreation1);
        
      //   const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
      //   // console.log(addresses);

      //   return { success: true, addresses };
      // },


    // pay: async ({ request }) => {
    //     const data = await request.formData();

    //     const neucron = new NeucronSDK();
        
    //     const authModule = neucron.authentication;
    //     const walletModule = neucron.wallet;
        
    //     // // const signUpResponse = await authModule.signUp({ email: "shubhamwebthree@gmail.com", password: "Shubham@1234" });
    //     // // console.log(signUpResponse);
        
    //     const loginResponse = await authModule.login({ email:data.get('email') , password:data.get('password') });
    //     console.log(loginResponse);
        
        // const walletKeys = await walletModule.getWalletKeys({});
        // console.log(walletKeys);
        
        
        // For Default wallet balance
        // const DefaultWalletBalance = await walletModule.getWalletBalance({});
        // console.log(DefaultWalletBalance);
        

        
        // const options = {
        //     outputs: [
        //       {
        //         address: data.get('paymail'),
        //         note: data.get('note'),
        //         amount: Number(data.get('amount'))
        //       }
        //     ]
        //   };
        
        // const payResponse = await neucron.pay.txSpend(options)
        // console.log(payResponse)
        
        // const walletHistory = await walletModule.getWalletHistory({ });
        // console.log(walletHistory);
        
        
        // console.log('initiating wallet')
        // const walletCreation1 = await walletModule.createWallet({ walletName: 'HelloShubham' });
        // console.log(walletCreation1);
        
        // const walletBalance = await walletModule.getWalletBalance({ walletId: walletCreation1.walletID });
        // console.log(walletBalance);
        
        // const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
        // console.log(addresses);
        
        // const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
        // console.log(mnemonic);
        
        // const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
        // console.log(allUtxos);
        
        // const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
        // console.log(xPubKeys);

      //   return { success: true, payment: payResponse.data.txid };
      // },

    };