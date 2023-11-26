class Bank
{
    roi()
    {
        return 0;

    }
}

class AXIS extends Bank
{
    roi()
    {
        return 10.5;
        
    }
}
class SBI extends Bank
{
    roi()
    {
        return 9.5;
        
    }
}
sbi=new SBI();
console.log(sbi.roi());//9.5

axis=new AXIS();
console.log(axis.roi());//10.5

bnk=new Bank();
console.log(bnk.roi()); //0

//purpose if inheritance
//re-usability and redundancy 

