using System;
using System.Collections.Generic;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> BoxingUnboxing = new List<object>();
            BoxingUnboxing.Add(7);
            BoxingUnboxing.Add(28);
            BoxingUnboxing.Add(-1);
            BoxingUnboxing.Add(true);
            BoxingUnboxing.Add("chair");

            for (var idx = 0; idx < BoxingUnboxing.Count; idx++)
            {
            Console.WriteLine(BoxingUnboxing[idx]);
            }
            
        }
    }
}
