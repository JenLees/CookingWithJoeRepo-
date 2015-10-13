namespace CookingWithJoe.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class messingwithstuff : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Reviews", "ProductName", c => c.String(nullable: false));
            AlterColumn("dbo.Reviews", "ProductReview", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Reviews", "ProductReview", c => c.String());
            AlterColumn("dbo.Reviews", "ProductName", c => c.String());
        }
    }
}
