let matrix=[ [1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16]]; 
let index=0,index1=0;
for(index=0 ; index < 4 ; index++)
{
    for(index1=0 ; index1 < 4; index1++)
    {
        if(index===0 || index===3 || index1===0 || index1===3)
        {
            matrix[index][index1]*=2;
        }
        else
        {
            matrix[index][index1]/=2;
        }
    }
}
print(matrix);