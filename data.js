var _0x43a7=['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ','split','checked','myCheck','pow','join','log','charCodeAt','indexOf','getElementById','0123456789!@#$&_-()','charAt','0123456789012345678','length','myOut','value','myCode'];(function(_0x2e1c50,_0x43a76a){var _0x3e1a1e=function(_0x57996d){while(--_0x57996d){_0x2e1c50['push'](_0x2e1c50['shift']());}};_0x3e1a1e(++_0x43a76a);}(_0x43a7,0x125));var _0x3e1a=function(_0x2e1c50,_0x43a76a){_0x2e1c50=_0x2e1c50-0x0;var _0x3e1a1e=_0x43a7[_0x2e1c50];return _0x3e1a1e;};var input_text='';var output_text='';var input_seed='';var offset=0x0;var curr_value=new Array();var input_nums=new Array();var seed_nums=new Array();var sum_nums=0x0;var input_check='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-';const out_letters=_0x3e1a('0xd');var out_chars='0123456789!@#$&_-()';function clearArrays(){sum_nums=0x0;curr_value=zeroArray(input_text[_0x3e1a('0x9')]);input_nums=zeroArray(input_text['length']);seed_nums=zeroArray(input_seed[_0x3e1a('0x9')]);offset=0x0;}function zeroArray(_0x580d80){var _0x550e0b=new Array(_0x580d80);for(var _0x36f38b=0x0;_0x36f38b<_0x580d80;_0x36f38b++){_0x550e0b[_0x36f38b]=0x0;}return _0x550e0b;}function scramble(_0x401632){var _0xb59500=_0x401632[_0x3e1a('0xe')]('');for(var _0xe2602f=0x0;_0xe2602f<_0x401632[_0x3e1a('0x9')];_0xe2602f++){var _0xb884b8=input_seed[_0x3e1a('0x3')](_0xe2602f%input_seed[_0x3e1a('0x9')]),_0x58cea7=(_0xe2602f+input_seed[_0x3e1a('0x9')])*Math[_0x3e1a('0x0')](0x11,_0xe2602f)%_0x401632[_0x3e1a('0x9')];var _0x1a5328=_0xb59500[_0xb884b8];_0xb59500[_0xb884b8]=_0xb59500[_0x58cea7];_0xb59500[_0x58cea7]=_0x1a5328;}_0x401632=_0xb59500[_0x3e1a('0x1')]('');return _0x401632;}function populateArrays(){input_text=scramble(input_text);console[_0x3e1a('0x2')](input_text);for(u=0x0;u<input_text[_0x3e1a('0x9')];u++){var _0x23b1ed=input_text[_0x3e1a('0x7')](u),_0x44e07e=input_check[_0x3e1a('0x4')](_0x23b1ed);if(_0x44e07e!=-0x1){input_nums[u]=_0x44e07e;curr_value[u]+=_0x44e07e;offset+=_0x44e07e;sum_nums+=input_text[_0x3e1a('0x3')](u)*Math[_0x3e1a('0x0')](0x11,u+0x1)*(input_text[_0x3e1a('0x9')]+0x1-u);var _0x164799=u%input_seed[_0x3e1a('0x9')];curr_value[u]+=input_seed[_0x3e1a('0x3')](_0x164799);}}}function incryptPassword(){output_text='';offset+=sum_nums;for(i=0x0;i<input_text[_0x3e1a('0x9')];i++){var _0x3eb659=i%seed_nums[_0x3e1a('0x9')];var _0x38bba5=(input_nums[i]+curr_value[i]+Math[_0x3e1a('0x0')](0x2,seed_nums[_0x3eb659])+offset+i)%out_letters[_0x3e1a('0x9')];output_text+=out_letters[_0x3e1a('0x7')](_0x38bba5);_0x38bba5=(input_nums[i]+curr_value[i]+Math[_0x3e1a('0x0')](0x2,seed_nums[_0x3eb659])+offset+i)%out_chars[_0x3e1a('0x9')];output_text+=out_chars[_0x3e1a('0x7')](_0x38bba5);}output_text=scramble(output_text);}function runApp(){var _0x3bc102=document[_0x3e1a('0x5')](_0x3e1a('0x10'));if(_0x3bc102[_0x3e1a('0xf')]==![]){out_chars=_0x3e1a('0x8');}else{out_chars=_0x3e1a('0x6');}input_text=document[_0x3e1a('0x5')]('myText')[_0x3e1a('0xb')];input_seed=document[_0x3e1a('0x5')](_0x3e1a('0xc'))[_0x3e1a('0xb')];clearArrays();populateArrays();incryptPassword();document[_0x3e1a('0x5')](_0x3e1a('0xa'))[_0x3e1a('0xb')]=output_text;}
