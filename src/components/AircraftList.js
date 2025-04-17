const aircraftFilenames = [
    'Airbus_A300-600.jpg',
    'Airbus_A310.jpg',
    'Airbus_A318.jpg',
    'Airbus_A319CJ.jpg',
    'Airbus_A320.jpg',
    'Airbus_A330-200.jpg',
    'Airbus_A340-500.jpg',
    'Airbus_A380.jpg',
    'ATR_ATR-72.jpg',
    'Boeing_707.jpg',
    'Boeing_717.jpg',
    'Boeing_720.jpg',
    'Boeing_727-100.jpg',
    'Boeing_737-100-200.jpg',
    'Boeing_737-500.jpg',
    'Boeing_737-700-800.jpg',
    'Boeing_747-400.jpg',
    'Boeing_747SP.jpg',
    'Boeing_757-200.jpg',
    'Boeing_767-300.jpg',
    'Boeing_777-300.jpg',
    'Boeing_787-8-Dreamliner.jpg',
    'Boeing_MD-10.jpg',
    'Bombardier_BD-700.jpg',
    'Bombardier_Learjet-45.jpg',
    'Bombardier_Learjet-55-60.jpg',
    'British_Aerospace_Jetstream-31.jpg',
    'Canadair_CL-600-Challenger-600.jpg',
    'Canadair_CL-600-CRJ-700.jpg',
    'Cessna_Citation-X.jpg',
    'Dassault_Falcon-2000.jpg',
    'Dassault_Falcon-900.jpg',
    'Embraer_EMB-110-Bandeirante.jpg',
    'Embraer_ERJ-145.jpg',
    'Embraer_ERJ-170-175-190-195.jpg',
    'Fokker_100.jpg',
    'Fokker_70.jpg',
    'Honda_HA-420-HondaJet.jpg',
    'Ilyushin_II-96-300.jpg',
    'Israel_Gulfstream-G200.jpg',
    'McDonnell_Douglas_DC-9-10-20-30.jpg',
    'McDonnell_Douglas_MD-87.jpg',
    'Raytheon_Beechcraft_1900.jpg',
    'Raytheon_Hawker-1000.jpg',
    'Saab_340.jpg',
    'Sukhoi_Superjet-100.jpg',
    'Tupolev_Tu-134.jpg',
    'Tupolev_Tu-154.jpg',
    'Tupolev_Tu-334.jpg',
    'Vickers_VC10.jpg',
];

const aircraftList = aircraftFilenames.map((filename, index) => {
    const name = filename
        .replace(/\.[^/.]+$/, '')         
        .replace(/[_]/g, ' ')            
        .replace(/\b\w/g, l => l.toUpperCase()); 

    return {
        id: index + 1,
        name,
        img: `https://raw.githubusercontent.com/CanaLeung/SecretLair/refs/heads/gh-pages/assets/Aircrafts/${filename}`,

    };
});

export default aircraftList;
