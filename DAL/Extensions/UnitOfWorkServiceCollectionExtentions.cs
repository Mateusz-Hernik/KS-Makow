using DAL.Abstract;
using DAL.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DAL.Extensions
{
    public static class UnitOfWorkServiceCollectionExtentions
    {
        public static IServiceCollection AddUnitOfWork<TContext>(this IServiceCollection services)
            where TContext : DbContext
        {
            services.AddScoped<IRepositoryFactory, UnitOfWork<TContext>>();
            services.AddScoped<IUnitOfWork, UnitOfWork<TContext>>();
            services.AddScoped<IUnitOfWork<TContext>, UnitOfWork<TContext>>();

            return services;
        }
    }
}
