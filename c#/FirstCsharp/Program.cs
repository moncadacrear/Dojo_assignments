using System;
using System.Collections.Generic;

namespace FirstCsharp
{
    class Program
    {
        public static string QuoteMaker(string author, string quote, string dialogueVerb = "says")
        {
            string formattedQoute = $"{author}{dialogueVerb}, \"{quote}\"";
            Console.WriteLine(formattedQoute);
            return formattedQoute;
        }
        
        static void Main(string[] args)
        {
            //Datatypes nameOfVar = assigned value
            int x = 5;

            //instantiate empty list of int
            //List<int> numbers = new List<int>();


            //instantiate list filled with some ints
            List<int> numbers = new List<int>(){1,2,3,4};
            numbers.Add(x);
            numbers.Remove(1);
            numbers.Remove(numbers.Count -1);

                // (Datatype varName in nameOfIteratable)
            foreach (int item in numbers)
            {
                Console.WriteLine(item);
            }

            //arry must have length speified and length cannot change

            int[] nums = new int[5];
            string[]pingPongChamps = new string[]{"Neil", "Eduardo", "Morley"};

            Dictionary<string, string> person1 = new Dictionary<string, string>(){
                {"FirstName", "Neil"},
                {"LastName", "Mos"}
            };
            Dictionary<string, dynamic> person2 = new Dictionary<string, dynamic>(){
                {"FirstName", "Ali"},
                {"LastName", "G"},
                {"Age", 1337}
            };
            // Add new key
            person2["HairColor"] = "Brown";
            //dot does not work 
            // person2.HairColor ="Brown";

            Console.WriteLine($"{string.Join(",",person2)}");

            // loop over dictionary
            foreach (KeyValuePair<string, dynamic> entry in person2)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }

            QuoteMaker("Ali G", "Techmology, is it good, or is it whack?", "shouted");

            Console.WriteLine("starts");
            // loop from 1 to 5 including 5
            for (int num = 1; num <= 5; num++)
            {
                Console.WriteLine(num);
            }
            // loop from 1 to 5 excluding 5
            for (int v = 1; v < 5; v++)
            {
                Console.WriteLine(v);
            }
            Console.WriteLine("ends");




            int start = 0;
            int end = 5;
            // loop from start to end including end
            for (int t = start; t <= end; t++)
            {
                Console.WriteLine(t);
            }
            // loop from start to end excluding end
            for (int b = start; b < end; b++)
            {
                Console.WriteLine(b);
            }


            //The execution section does not always have to use ++
            for (int w = 1; w < 6; w = w + 1)
            {
                Console.WriteLine(w);
            }





            int i = 1;
            while (i < 6)
            {
                Console.WriteLine(i);
                i = i + 1;
            }


            Console.WriteLine("starts");

            Random rand = new Random();
            for(int val = 0; val < 10; val++)
            {
                //Prints the next random value between 2 and 8
                Console.WriteLine(rand.Next(2,8));
            }

            Console.WriteLine("ends");




            // string[] MyCars = new string[] { "Mazda Miata", "Ford Model T", "Dodge Challenger", "Nissan 300zx"};
            // // The 'Length' property tells us how many values are in the Array (4 in our example here). 
            // // We can use this to determine where the loop ends: Length-1 is the index of the last value. 
            // for (int idx = 0; idx < MyCars.Length; idx++)
            // {
            //     Console.WriteLine($"I own a {MyCars[idx]}");
            // }


            string[] myCars = new string[] { "Mazda Miata", "Ford Model T", "Dodge Challenger", "Nissan 300zx"}; 
            foreach (string car in myCars)
            {
                // We no longer need the index, because variable 'car' already represents each indexed value
                Console.WriteLine($"I own a {car}");
            }




            //Initializing an empty list of Motorcycle Manufacturers
            List<string> bikes = new List<string>();
            //Use the Add function in a similar fashion to push
            bikes.Add("Kawasaki");
            bikes.Add("Triumph");
            bikes.Add("BMW");
            bikes.Add("Moto Guzzi");
            bikes.Add("Harley Davidson");
            bikes.Add("Suzuki");
            //Accessing a generic list value is the same as you would an array
            Console.WriteLine(bikes[2]); //Prints "BMW"
            Console.WriteLine($"We currently know of {bikes.Count} motorcycle manufacturers.");





            //Using our array of motorcycle manufacturers from before
            //we can easily loop through the list of them with a C-style for loop
            //this time, however, Count is the attribute for a number of items.
            Console.WriteLine("The current manufacturers we have seen are:");
            for (var idx = 0; idx < bikes.Count; idx++)
            {
            Console.WriteLine("-" + bikes[idx]);
            }
            // Insert a new item between a specific index
            bikes.Insert(2, "Yamaha");
            //Removal from Generic List
            //Remove is a lot like Javascript array pop, but searches for a specified value
            //In this case we are removing all manufacturers located in Japan
            bikes.Remove("Suzuki");
            bikes.Remove("Yamaha");
            bikes.RemoveAt(0); //RemoveAt has no return value however
            //The updated list can then be iterated through using a foreach loop
            Console.WriteLine("List of Non-Japanese Manufacturers:");
            foreach (string manu in bikes)
            {
            Console.WriteLine("-" + manu);
            }




            Dictionary<string,string> profile = new Dictionary<string,string>();
            //Almost all the methods that exists with Lists are the same with Dictionaries
            profile.Add("Name", "Speros");
            profile.Add("Language", "PHP");
            profile.Add("Location", "Greece");
            Console.WriteLine("Instructor Profile");
            Console.WriteLine("Name - " + profile["Name"]);
            Console.WriteLine("From - " + profile["Location"]);
            Console.WriteLine("Favorite Language - " + profile["Language"]);



            // foreach (KeyValuePair<string,string> entry in profile)
            // {
            // Console.WriteLine(entry.Key + " - " + entry.Value);
            // }



            //The var keyword takes the place of a type in type-inference
            foreach (var entry in profile)
            {
            Console.WriteLine(entry.Key + " - " + entry.Value);
            Console.WriteLine("this is a shorter method");
            }



            double floatNum = 8.912121251256546456234123414534123;
            int intnumber =(int)floatNum;
            Console.WriteLine(intnumber);



            //Converting an integer to a string
            int seven = 7;
            string numAsString = seven.ToString(); //Evaluates as "7"
            Console.WriteLine(numAsString);
            // Console.WriteLine(seven.GetType());















        }
    }
}
