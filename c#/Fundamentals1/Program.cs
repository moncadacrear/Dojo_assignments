using System;

namespace Fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // for (int i = 1 ; i<=255; i++)
            // {
            //     Console.WriteLine(i);
            // }


            for (int x = 1 ; x<= 100 ; x++)
            {
                if (x % 3 == 0 )
                {
                    Console.WriteLine($"{x} is divisible by 3");
                }
                else if (x%5 == 0)
                {
                    Console.WriteLine($"{x} is divisible by 5");
                }
                else
                {
                    Console.WriteLine($"{x} not divisible by 3 or 5");
                }
            }


            // for (int x = 1 ; x<= 100 ; x++)
            // {
            //     if (x % 3 == 0  && x% 5 == 0)
            //     {
            //         Console.WriteLine("FizzBuzz");
            //     }
            //     else if (x%5 == 0)
            //     {
            //         Console.WriteLine("Buzz");
            //     }
            //     else if (x%3 == 0)
            //     {
            //         Console.WriteLine("Fizz");
            //     }
            //     else
            //     {
            //         Console.WriteLine($"{x} not divisible by 3 or 5");
            //     }
            // }



        }
    }
}
