using System;
using System.Collections.Generic;

namespace OOPExamples



{
    public class GroceryStore
    {
        //property with no set , cannot be assigned from outside class
        public string Name {get; }
        private List<Shopper> shoppers = new List<Shopper>();


        public GroceryStore (){}

        private List<Shopper> bannedShopper = new List<Shopper>();

        public GroceryStore(string name, List<Shopper>
        bannedShopper);

        public GroceryStore(string name)
        {
            Name = name;
            bannedShopper.AddRange();

        }

        private void DisplayShoppers()
        {
            Console.WriteLine(string.Join(", ", shoppers));
        }

        private void shopperEntering(Shopper shopper)
        {
            if (bannedShopper.Contains(shopper))
            {
                Console.WriteLine($"you are not welcome to the store{shopper.Name}")
            }
            else 
            {
                Console.WriteLine($"welcome {shopper.Name} to {Name}");

            }
            this.DisplayShoppers();
        }

        public void ShopperExiting(Shopper shopper)
        {

        }
    }
}