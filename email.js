function send(params) {    
    return params.from + ' to ' + params.to; 
}

module.exports = {
    send: send
};
