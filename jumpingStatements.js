// break     continue

for(let i=1; i<=25; i++)
{
    if(i==15)// if i==15 it will break the loop and not print further, it will print till 14 
    break;

    console.log(i);
}

console.log("Continue Example")

for(let j=1; j<=25; j++)
{
    if(j==15) // it will print 1,2,3......14 and skip 15 then print 16,17,18.......25  
    continue;

    console.log(j);
}

console.log("Continue Example-2")

for(let k=1; k<=25; k++)
{
    if(k==5 || k==10 || k==15) // it will skip at 5, 10 and 15 and rest will print as it is.  
    continue;

    console.log(k);
}