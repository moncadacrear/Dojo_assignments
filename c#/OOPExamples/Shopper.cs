namespace OOPExamples
{
    public class Shopper
    {
        public string Name { get; set; }

        // default parameterless constructor, if you have no constructor , this will be used even if you dont write it 
        //if you create your own constructor, 
        public Shopper(){}

        public Shopper(string name )
        {
            this.Name = name ;
        }

        public  void EnterStore(GroceryStore selectedStore)
        {
            selectedStore.shopperEntering(this);
        }

        public override string ToString()
        {
            return Name;

        }
    }
}