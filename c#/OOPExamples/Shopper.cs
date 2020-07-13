namespace OOPExamples
{
    public class Shopper
    {
        public string Name { get; set; }

        private GroceryStore currentStore = null;

        // default parameterless constructor, if you have no constructor , this will be used even if you dont write it 
        //if you create your own constructor, 
        public Shopper(){}

        public Shopper(string name )
        {
            this.Name = name ;
            Name = name;
        }

        public  void EnterStore(GroceryStore selectedStore)
        {
            currentStore = selectedStore;
            selectedStore.shopperEntering(this);
        }


        public void ExitStore ()
        {
            if(currentStore != null)
            {
                currentStore.ShopperExiting(this);
                currentStore = null;
            }
        }

        public override string ToString()
        {
            return Name;

        }
    }
}