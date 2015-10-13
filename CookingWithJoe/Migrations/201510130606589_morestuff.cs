namespace CookingWithJoe.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class morestuff : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Reviews", "ProductName", c => c.String());
            AlterColumn("dbo.Reviews", "ProductReview", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Reviews", "ProductReview", c => c.String(nullable: false));
            AlterColumn("dbo.Reviews", "ProductName", c => c.String(nullable: false));
        }
    }
}
