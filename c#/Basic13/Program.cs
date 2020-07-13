using System;

namespace Basic13
{
    class Program

    {



        public static void PrintNumbers()
        {
            for (int i =1 ; i <= 255; i++ )
            {
                Console.WriteLine(i);
            }
        }

        public static void PrintOdds()
        {
            // Print all of the odd integers from 1 to 255.
            for(int i = 1; i <= 255; i++)
            {
                if (i % 2 == 1)
                {
                    Console.WriteLine(i);
                }
            }
        }



        public static void PrintSum()
        {
            int sum = 0;
            for (int i =1 ; i <= 255; i++ )
            {
                
                sum += i;
                Console.WriteLine($"New number {i}");
                Console.WriteLine($"Sum {sum}");
                
            }
        }

        public static void LoopArray(int[] numbers)
        {
            foreach(int num in numbers)
            {
                Console.WriteLine(num);
            }
        }


        public static int FindMax(int[] numbers)
        {   
            int Maxnumber = numbers[0];
            foreach(int num in numbers)
            {
                if(num > Maxnumber)
                {
                    Maxnumber = num;
                }
            }
            return Maxnumber ; 

        }


        public static void GetAverage(int[] numbers)
        {
            int count = 0;
            int avg = 0;
            foreach (int num in numbers)
            {
                count ++;
                avg += num;
            }
            Console.WriteLine(avg / count);
        }


        public static int[] OddArray()
        {
            int[] NewArry;
            NewArry = new int[]{};
            for(int i = 1; i <= 255; i++)
            {
                if (i % 2 == 1)
                {
                    
                }
            }
            return NewArry;
        }






        static void Main(string[] args)
        {
            // PrintNumbers();
            // PrintOdds();
            // PrintSum();

            int[] array;
            array = new int[]{2,10,3};


            // LoopArray(array);
            // int maxnumber = FindMax(array);
            // Console.WriteLine(maxnumber);
            // GetAverage(array);
        
        }





    }
}
