namespace CookingWithJoe.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedCategory : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Recipes", "Category", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Recipes", "Category");
        }
    }
}
