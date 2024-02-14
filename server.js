const admzip=require('adm-zip');

const unzip=new admzip('./New Microsoft Word Document.zip');
unzip.extractAllTo('./');