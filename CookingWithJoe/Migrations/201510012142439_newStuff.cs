namespace CookingWithJoe.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newStuff : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Recipes", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Recipes", "Image");
        }
    }
}
