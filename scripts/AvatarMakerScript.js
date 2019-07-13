var hairCount = 1;

function changeHair(){
  if (hairCount == 1){
    //Starting Hair 1
     document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -72px 0";
     document.getElementById("mainHair").style.width = "542px";
     document.getElementById("mainHair").style.height = "327px";
     document.getElementById("mainHair").style.top = "0px";
     document.getElementById("mainHair").style.left = "204px";
  }
  if (hairCount == 2){
    //Short Black 2
     document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -738px -500px";
     document.getElementById("mainHair").style.width = "390px";
     document.getElementById("mainHair").style.height = "184px";
     document.getElementById("mainHair").style.top = "110px";
     document.getElementById("mainHair").style.left = "268px";
  }
  if (hairCount == 3){
    //Bald 3
    document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -764px -66px";
    document.getElementById("mainHair").style.width = "422px";
    document.getElementById("mainHair").style.height = "199px";
    document.getElementById("mainHair").style.top = "162px";
    document.getElementById("mainHair").style.left = "252px";
  }
  if (hairCount == 4){
    //  Old man 4
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -1311px -61px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "239px";
      document.getElementById("mainHair").style.top = "122px";
      document.getElementById("mainHair").style.left = "250px";
  }
  if (hairCount == 5){
    // Short straight 5
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -1796px -51px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "256px";
      document.getElementById("mainHair").style.top = "118px";
      document.getElementById("mainHair").style.left = "254px";
  }
  if (hairCount == 6){
    //Long straight 6
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -2294px -47px";
      document.getElementById("mainHair").style.width = "421px";
      document.getElementById("mainHair").style.height = "310px";
      document.getElementById("mainHair").style.top = "60px";
      document.getElementById("mainHair").style.left = "256px";
  }
  if (hairCount == 7){
    // Puffy 7
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -86px -447px";
      document.getElementById("mainHair").style.width = "540px";
      document.getElementById("mainHair").style.height = "326px";
      document.getElementById("mainHair").style.top = "0px";
      document.getElementById("mainHair").style.left = "206px";
  }
  if (hairCount == 8){
    // Flattop 8
    document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -1280px -445px";
    document.getElementById("mainHair").style.width = "389px";
    document.getElementById("mainHair").style.height = "128px";
    document.getElementById("mainHair").style.top = "64px";
    document.getElementById("mainHair").style.left = "268px";
  }
  if (hairCount == 9){
    // Flattop 2 9
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -1788px -415px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "256px";
      document.getElementById("mainHair").style.top = "104px";
      document.getElementById("mainHair").style.left = "254px";
  }
  if (hairCount == 10){
    // Small curls 10
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -896px -1120px";
      document.getElementById("mainHair").style.width = "316px";
      document.getElementById("mainHair").style.height = "165px";
      document.getElementById("mainHair").style.top = "12px";
      document.getElementById("mainHair").style.left = "301px";
  }

  if (hairCount == 11){
    // Small spikes 11
      document.getElementById("mainHair").style.background = "url('images/hair.png') no-repeat -1406px -1109px";
      document.getElementById("mainHair").style.width = "335px";
      document.getElementById("mainHair").style.height = "174px";
      document.getElementById("mainHair").style.top = "10px";
      document.getElementById("mainHair").style.left = "300px";
  }
}

function hairAdd(){
  hairCount = hairCount + 1;
  if (hairCount == 12){
    hairCount = 1;
  }
  changeHair();
  //document.getElementById("testMe").innerText = hairCount;
}

function hairSub(){
  hairCount = hairCount - 1;
   if (hairCount == 0){
    hairCount = 12;
  }
  changeHair();
  //document.getElementById("testMe").innerText = hairCount;
}



// Eyebrows thin
//document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -21px -567px";
//document.getElementById("mainEyebrows").style.width = "261px";
//document.getElementById("mainEyebrows").style.height = "28px";
//document.getElementById("mainEyebrows").style.top = "195px";
//document.getElementById("mainEyebrows").style.left = "324px";

// Eyebrows medium
//  document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -29px -511px";
//  document.getElementById("mainEyebrows").style.width = "262px";
//  document.getElementById("mainEyebrows").style.height = "32px";
//  document.getElementById("mainEyebrows").style.top = "195px";
//  document.getElementById("mainEyebrows").style.left = "324px";

// Eyebrows thick
//document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -14px -440px";
//document.getElementById("mainEyebrows").style.width = "268px";
//document.getElementById("mainEyebrows").style.height = "39px";
//document.getElementById("mainEyebrows").style.top = "195px";
//document.getElementById("mainEyebrows").style.left = "318px";

// Eyebrows uni2
//document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -6px -345px";
//document.getElementById("mainEyebrows").style.width = "267px";
//  document.getElementById("mainEyebrows").style.height = "38px";
//  document.getElementById("mainEyebrows").style.top = "195px";
//  document.getElementById("mainEyebrows").style.left = "318px";

// Eybrows uni
//  document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -22px -99px";
//  document.getElementById("mainEyebrows").style.width = "258px";
//  document.getElementById("mainEyebrows").style.height = "24px";
//  document.getElementById("mainEyebrows").style.top = "195px";
//  document.getElementById("mainEyebrows").style.left = "328px";

// Eyebrows thin
//  document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -417px -2px";
//  document.getElementById("mainEyebrows").style.width = "266px";
//  document.getElementById("mainEyebrows").style.height = "32px";
//  document.getElementById("mainEyebrows").style.top = "200px";
//  document.getElementById("mainEyebrows").style.left = "320px";

// Eyebrows original
//document.getElementById("mainEyebrows").style.background = "url('images/eyeBrows.png') no-repeat -2px 0;";
//document.getElementById("mainEyebrows").style.width = "308px";
//document.getElementById("mainEyebrows").style.height = "37px";
//document.getElementById("mainEyebrows").style.top = "185px";
//document.getElementById("mainEyebrows").style.left = "304px";





// Evil smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -965px -191px";
//  document.getElementById("mainMouth").style.width = "266px";
//  document.getElementById("mainMouth").style.height = "105px";
//  document.getElementById("mainMouth").style.top = "440px";
//  document.getElementById("mainMouth").style.left = "320px";

// Grin smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -600px -8px";
//  document.getElementById("mainMouth").style.width = "246px";
//  document.getElementById("mainMouth").style.height = "106px";
//  document.getElementById("mainMouth").style.top = "440px";
//  document.getElementById("mainMouth").style.left = "330px";

// Big smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -757px -539px";
//  document.getElementById("mainMouth").style.width = "243px";
//  document.getElementById("mainMouth").style.height = "101px";
//  document.getElementById("mainMouth").style.top = "440px";
//  document.getElementById("mainMouth").style.left = "340px";

// Lil smile
//document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -772px -729px";
//document.getElementById("mainMouth").style.width = "157x";
//  document.getElementById("mainMouth").style.height = "66px";
//  document.getElementById("mainMouth").style.top = "460px";
//  document.getElementById("mainMouth").style.left = "380px";

// Unentertained smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -778px -1052px";
//  document.getElementById("mainMouth").style.width = "151x";
//  document.getElementById("mainMouth").style.height = "24px";
//  document.getElementById("mainMouth").style.top = "490px";
//  document.getElementById("mainMouth").style.left = "380px";

// Frown smile
//document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -803px -1162px";
//document.getElementById("mainMouth").style.width = "128x";
//document.getElementById("mainMouth").style.height = "50px";
//document.getElementById("mainMouth").style.top = "470px";
//document.getElementById("mainMouth").style.left = "400px";

// Not smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -786px -950px";
//  document.getElementById("mainMouth").style.width = "143x";
//  document.getElementById("mainMouth").style.height = "5px";
//  document.getElementById("mainMouth").style.top = "470px";
//  document.getElementById("mainMouth").style.left = "385px";

// Buck smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -567px -572px";
//  document.getElementById("mainMouth").style.width = "121x";
//  document.getElementById("mainMouth").style.height = "35px";
//  document.getElementById("mainMouth").style.top = "470px";
//  document.getElementById("mainMouth").style.left = "385px";

// Surprise smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -349px -130px";
//  document.getElementById("mainMouth").style.width = "159x";
//  document.getElementById("mainMouth").style.height = "81px";
//  document.getElementById("mainMouth").style.top = "460px";
//  document.getElementById("mainMouth").style.left = "365px";

// Stitches smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -26px -1095px";
//  document.getElementById("mainMouth").style.width = "234px";
//  document.getElementById("mainMouth").style.height = "94px";
//  document.getElementById("mainMouth").style.top = "435px";
//  document.getElementById("mainMouth").style.left = "336px";

// Yellow smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -20px -904px";
//  document.getElementById("mainMouth").style.width = "247px";
//  document.getElementById("mainMouth").style.height = "106px";
//  document.getElementById("mainMouth").style.top = "435px";
//  document.getElementById("mainMouth").style.left = "336px";

// Big smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat 0 -333px";
//  document.getElementById("mainMouth").style.width = "246px";
//  document.getElementById("mainMouth").style.height = "106px";
//  document.getElementById("mainMouth").style.top = "435px";
//  document.getElementById("mainMouth").style.left = "336px";

// Smiles
//document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -15px -130px";
//document.getElementById("mainMouth").style.width = "243px";
//document.getElementById("mainMouth").style.height = "89px";
//document.getElementById("mainMouth").style.top = "440px";
//document.getElementById("mainMouth").style.left = "330px";

// Original smile
//  document.getElementById("mainMouth").style.background = "url('images/mouths.png') no-repeat -344px -337px";
//  document.getElementById("mainMouth").style.width = "185px";
//  document.getElementById("mainMouth").style.height = "80px";
//  document.getElementById("mainMouth").style.top = "440px";
//  document.getElementById("mainMouth").style.left = "356px";





// Full nose 3
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -1529px 0";
//document.getElementById("mainNose").style.width = "71px";
//document.getElementById("mainNose").style.height = "79px";
//document.getElementById("mainNose").style.top = "348px";
//document.getElementById("mainNose").style.left = "420px";

// Full nose 2
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -1410px 0";
//  document.getElementById("mainNose").style.width = "74px";
//  document.getElementById("mainNose").style.height = "74px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Full nose
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -1273px 0";
//  document.getElementById("mainNose").style.width = "73px";
//  document.getElementById("mainNose").style.height = "74px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Round nose
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -1166px -12px";
//document.getElementById("mainNose").style.width = "54px";
//document.getElementById("mainNose").style.height = "62px";
//document.getElementById("mainNose").style.top = "348px";
//document.getElementById("mainNose").style.left = "420px";

// Long nose
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -1046px 0";
//  document.getElementById("mainNose").style.width = "80px";
//  document.getElementById("mainNose").style.height = "81px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Full nose
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -815px -14px";
//  document.getElementById("mainNose").style.width = "77px";
//  document.getElementById("mainNose").style.height = "62px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Half nose
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -706px -14px";
//document.getElementById("mainNose").style.width = "63px";
//  document.getElementById("mainNose").style.height = "62px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Low nose
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -394px -21px";
//document.getElementById("mainNose").style.width = "77px";
//document.getElementById("mainNose").style.height = "66px";
//document.getElementById("mainNose").style.top = "348px";
//document.getElementById("mainNose").style.left = "420px";

// Fulltriangle nose
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -278px -21px";
//  document.getElementById("mainNose").style.width = "76px";
//  document.getElementById("mainNose").style.height = "65px";
//  document.getElementById("mainNose").style.top = "348px";
//  document.getElementById("mainNose").style.left = "420px";

// Triangular nose
//  document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -183px -18px";
//  document.getElementById("mainNose").style.width = "46px";
//  document.getElementById("mainNose").style.height = "65px";
//  document.getElementById("mainNose").style.top = "340px";
//  document.getElementById("mainNose").style.left = "400px";

// Original nose
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat -604px -16px";
//document.getElementById("mainNose").style.width = "72px";
//document.getElementById("mainNose").style.height = "81px";
//document.getElementById("mainNose").style.top = "340px";
//document.getElementById("mainNose").style.left = "400px";

// Big nose
//document.getElementById("mainNose").style.background = "url('images/noses.png') no-repeat 0 -13px";
//document.getElementById("mainNose").style.width = "81px";
//document.getElementById("mainNose").style.height = "79px";
//document.getElementById("mainNose").style.top = "344px";
//document.getElementById("mainNose").style.left = "420px";





// Angry Eyes
//document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat -343px -344px";
//document.getElementById("mainEyes").style.width = "252px";
//document.getElementById("mainEyes").style.height = "113px";
//document.getElementById("mainEyes").style.top = "220px";
//document.getElementById("mainEyes").style.left = "330px";

// Pink Eye
//  document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat -26px -340px";
//  document.getElementById("mainEyes").style.width = "252px";
//  document.getElementById("mainEyes").style.height = "113px";
//  document.getElementById("mainEyes").style.top = "220px";
//  document.getElementById("mainEyes").style.left = "330px";

// Square Eyes
//  document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat -314px -182px";
//  document.getElementById("mainEyes").style.width = "254px";
//  document.getElementById("mainEyes").style.height = "87px";
//  document.getElementById("mainEyes").style.top = "235px";
//  document.getElementById("mainEyes").style.left = "330px";

// Crazy Eyes
//  document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat -22px -173px";
//  document.getElementById("mainEyes").style.width = "252px";
//  document.getElementById("mainEyes").style.height = "114px";
//  document.getElementById("mainEyes").style.top = "220px";
//  document.getElementById("mainEyes").style.left = "330px";

// Eye lashes
//  document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat 0 0";
//  document.getElementById("mainEyes").style.width = "282px";
//  document.getElementById("mainEyes").style.height = "120px";
//  document.getElementById("mainEyes").style.top = "220px";
//  document.getElementById("mainEyes").style.left = "315px";


// Original eyes
//  document.getElementById("mainEyes").style.background = "url('images/eyes.png') no-repeat -331px -6px";
//  document.getElementById("mainEyes").style.width = "251px";
//  document.getElementById("mainEyes").style.height = "114px";
//  document.getElementById("mainEyes").style.top = "220px";
//  document.getElementById("mainEyes").style.left = "330px";
