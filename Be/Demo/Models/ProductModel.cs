using System.ComponentModel.DataAnnotations;

namespace Demo.Models
{
    public class ProductModel
    {
        [Key]
        public Guid ProductId { get; set; }
        public String Seller { get; set; } = null!;
        public String ProductName { get; set; } = null!;
        public String ProductDescription { get; set; } = null!;
        public int ProductPrice { get; set; }
    }
}
