using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Demo.Models
{
    public class UserModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public String Username { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public String Password { get; set; } = null!;

        public DateTime DateTime { get; set; } = DateTime.Now;
    }


}
