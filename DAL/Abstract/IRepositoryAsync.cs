using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace DAL.Abstract
{
    public interface IRepositoryAsync<T> where T : class
    {

        Task<T> SingleAsync(Expression<Func<T, bool>> predicate = null,
             Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
             Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);

        Task<IPaginate<T>> GetListAsync(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
            int index = 0,
            int size = 20,
            CancellationToken cancellationToken = default(CancellationToken));
    }
}
