window.leakArray = [];

for (let i = 0; i < 1000; i++)
{
    leakArray[i] = i;
}

//window.leakArray = null;

