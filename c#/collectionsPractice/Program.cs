using System;
using System.Collections.Generic;

namespace collectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            // array
            int[]array;
            array = new int [] {0,1,2,3,4,5,6,7,8,9};
            Console.WriteLine(array[1]);

            string[] arrayName = new string [] {"Tim", "Martin", "Nikki", "Sara"};

            string[] numArray = new string[10];
            string[] newArray = {"true", "false" };
            //array


            //List
            List<string> icecream = new List<string>();
            icecream.Add("Vhocolate");
            icecream.Add("Vanilla");
            icecream.Add("Cookies & cream");
            icecream.Add("Green tea");
            icecream.Add("strawberry");
            icecream.Add("chocolate chip");
            Console.WriteLine(icecream.Count);
            icecream.RemoveAt(3);
            Console.WriteLine(icecream.Count);
            //List


            //Dictionary
            Dictionary<string,string> flavors = new Dictionary<string, string>();
            flavors.Add(arrayName[3], icecream[1]);
            flavors.Add(arrayName[0], icecream[0]);
            flavors.Add(arrayName[1], icecream[2]);
            foreach(KeyValuePair<string,string> entry in flavors)
            {
                Console.WriteLine(entry.Key + "-" + entry.Value);
            }
            //Dictionary
            
        }
    }
}
