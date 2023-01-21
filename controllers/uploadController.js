exports.upload = async (req, res) => {
    try {      
        let response;        
        console.log(req.body);
        console.log(req.files);     
        response={mensaje:'Successfully uploaded files'};
      return res.status(200).send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };