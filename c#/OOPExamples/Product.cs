namespace OOPExamples
{
    public class Product
    {
        public string Name {get; set;}

        public decimal Price {get; }

        public int Quantity {get; set;}

        public Product(){}

        public Product(string name, int quantity , decimal price)
        {
            Name =name;
            Price =price;
            Quantity = quantity;
        }

        public override string ToString()
        {
            return $"{Name} (x{Quantity})";
        }




    }
}