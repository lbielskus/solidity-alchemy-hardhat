// SPDX-License-Identifier: MIT (Licencijos identifikatorius. MIT- Open-source licencijavimas)

// Nurodoma solidity versija
pragma solidity >=0.7.3;

// Kontrakto States, functions, events
// Kontrakto pavadinimas nustatytas 'LBTest'
contract LbTest {
    // Emituoti, kai iskvieciama funkcija
    event UpdatedMessages(string oldStr, string newStr);

    // Nurodo, kad kintamasis 'message' yra 'string'
    // Kintamieji saugomi saugykloje, zodis public leidzia pasiekti kintamuosius uz kontrakto ribu.
    string public message;

    // Constructor yra funkcija, kuri vykdoma tik sukuriant kontrakta
    // https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor(string memory initMessage) {
        // Priima string argumenta ir nustato jo verte 'message' kintamajame
        message = initMessage;
    }

    //Public or private nustato kas gali matyti pranesima
    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
    }
}
