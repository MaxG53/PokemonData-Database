import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }


  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{
   

    // create a port - our Gateway
    int port = 5500;
      
    //create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // create the database object
    Database db = new Database("jdbc:sqlite:PokemonFullStack.db");
    
    server.createContext("/", new RouteHandler("You are connected, but route not given or incorrect....") );

    String sql = "";

    sql  = " Select * from about ";
    server.createContext("/about", new RouteHandler(db,sql) ) ;
     
    sql  = " Select * from category";
    server.createContext("/category", new RouteHandler(db,sql) ) ;

    sql  = " Select * from evolution ";
    server.createContext("/evolution", new RouteHandler(db,sql) ) ;
   

    sql  = "SELECT about.NameId, about.Name, about.Gender1, about.Gender2, about.Height, about.Weight, ";
    sql += "category.Type1, category.Type2, category.Species, ";
    sql += "evolution.StarterPokemon, evolution.MiddlePokemon, evolution.FinalPokemon, evolution.FinalPokemon2 ";
    sql += "FROM \"Pokemon Data - About\" AS about ";
    sql += "INNER JOIN \"Pokemon Data - Category\" AS category ON about.NameId = category.NameId ";
    sql += "INNER JOIN \"Pokemon Data - Evolution\" AS evolution ON about.NameId = evolution.NameId ";
    server.createContext("/pokemon", new RouteHandler(db, sql));
   
   
   
   
    //Start the server
    server.start();

    System.out.println("Server is listening on port "+port);
       
      
    }    
}
