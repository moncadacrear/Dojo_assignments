using System;

namespace OOPExamples
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                - create a few grocery stores
                - create a few shoppers with a shopping list
                    - have a shoppers enter store, store should print a greeting
                - have store print list of shoppers
                - add items from their list to their cart
                    - prtint shopping cart items
                - Shopper checkout and pay
                    - shopper must have enough money
                        - shopper says they got too many items if not enough money
                    - shopper exits store after checkout
                    - store prints goodbue to shopper
                    - store should print list of shopper names
            */

            //Datatype varName = assigned value 

            Shopper shopper1 = new Shopper("patrick");
            Shopper shopper2 = new Shopper("levi");
            Shopper shopper3 = new Shopper("monica");
            GroceryStore albertandHisSons =  new GroceryStore
            ("albertsons", new System.Collections.Generic.List<Shopper>
            );


            shopper1.EnterStore(albertandHisSons);
            // Console.WriteLine(shopper1.Name);
        }
    }
}
